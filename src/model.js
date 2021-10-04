import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  query,
  where,
  deleteDoc,
  doc,
  updateDoc,
  orderBy,
  writeBatch,
} from "firebase/firestore/lite";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const model = function () {
  const firebaseConfig = {
    apiKey: "AIzaSyCQu6_4bo2mXWcDc93buu5cEYmCjOHIg9A",
    authDomain: "todo-app-heyslevin.firebaseapp.com",
    projectId: "todo-app-heyslevin",
    storageBucket: "todo-app-heyslevin.appspot.com",
    messagingSenderId: "234760339553",
    appId: "1:234760339553:web:554e8955b24c371f862a20",
  };

  // Initialize Firebase

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();

  // Sign in me

  signInWithEmailAndPassword(auth, "odin@odinproject.com", "odinproject")
    .then((userCredential) => {
      //Signed in
      const user = userCredential.user;
      console.log("Signed in");
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.errorCode;
      const errorMessage = error.message;
      console.log("Could not sign in");
      console.log(errorMessage);
    });

  // Global variables

  var todos = [];

  var filteredTodos = [];

  var projects = ["Inbox", "Urgent", "View All"];

  //Managing Projecs

  var current = "Inbox";

  var currentE;

  //Fix here. Setup Read
  var addProject = (val) => {
    projects.push(val);
  };

  var setProject = (val, liCurrent) => {
    current = val;
    currentE = liCurrent;
  };

  const setTodos = (newTodos) => {
    todos = newTodos;
  };

  const getAllProjects = () => {
    return projects;
  };

  var getProject = () => {
    return current;
  };

  var getProjectLi = () => {
    return currentE;
  };

  var addTask = (task, render) => {
    console.log("incoming task index:" + task.index);
    if (task.index === undefined) {
      newTask(task, render);
    } else if (Number.isInteger(+task.index)) {
      editTask(task, render);
    } else {
      alert("error in adding task");
    }
  };

  var getTotalTodos = () => {
    return todos;
  };

  var getTodos = () => {
    if (current === "View All") {
      current = "Inbox";
      return todos;
    } else {
      let filtered = todos.filter((todo) => {
        return todo.project === current;
      });
      return filtered;
    }
  };

  //Managing projects

  const updateLocalProjects = (projectArray) => {
    projects = projectArray;
  };

  const fetchProjects = async function getProjectsFromFirestore(
    renderProjects
  ) {
    let collectionRef = collection(db, "projects");
    let snapShot = await getDocs(collectionRef);
    let projectArray = snapShot.docs.map((doc) => doc.id);

    updateLocalProjects(projectArray);
    renderProjects();
  };

  //Managing tasks
  const updateLocalTodos = async function updateTodoArrayInModel(
    querySnapshot
  ) {
    let updatedTodos = await querySnapshot.docs.map((doc) => doc.data());
    return updatedTodos;
  };

  const updateFirebaseIndex = async function indexAfterDeletedItem() {
    const batch = writeBatch(db);

    const collectionRef = collection(db, "tasks");
    const snapShot = query(collectionRef, orderBy("index"));
    const querySnapshot = await getDocs(snapShot);

    querySnapshot.forEach(async (doc, i) => {
      batch.update(doc.ref, { index: i });
    });

    await batch.commit();
  };

  const fetchTodos = async function readTasksFromFirebase(render) {
    await updateFirebaseIndex();

    async function fetching() {
      const collectionRef = collection(db, "tasks");
      const q = query(collectionRef, orderBy("index"));
      const querySnapshot = await getDocs(q);
      const newTodos = await updateLocalTodos(querySnapshot);
      return newTodos;
    }
    let todos = await fetching();

    setTodos(todos);
    render();
  };

  const uploadTask = async function uploadTaskToFirebase(todo, render) {
    try {
      const docRef = await addDoc(collection(db, "tasks"), todo);
      console.log("Document saved with id: " + docRef.id);
      fetchTodos(render);
    } catch (e) {
      console.log("error uploading todo: ", e);
    }
  };

  let deleteOnFirebase = async function deleteTaskOnDatabase(
    taskIndex,
    render
  ) {
    //select database collection
    const collectionRef = collection(db, "tasks");
    //Query database
    const index = +taskIndex;
    const q = query(collectionRef, where("index", "==", index));

    //GetDocs from query
    const querySnapshot = await getDocs(q);

    //Delete item
    querySnapshot.forEach(async (doc) => {
      if (doc.exists) {
        await deleteDoc(doc.ref);
        fetchTodos(render);
      } else {
        console.log("document not found");
      }
    });
  };

  var newTask = (task, render) => {
    console.log("adding new task");
    const todo = {
      index: todos.length,
      project: task.project,
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      priority: task.priority,
    };

    uploadTask(todo, render);
  };

  const editOnFirebase = async (todo) => {
    let collectionRef = collection(db, "tasks");
    let q = query(collectionRef, where("index", "==", todo.index));

    let allDocs = await getDocs(q);
    let docSnap = allDocs.docs[0];
    if (!docSnap.empty) {
      await updateDoc(docSnap.ref, todo);
    } else {
      console.log("no such document");
    }
  };

  var editTask = async (task, render) => {
    console.log("editing task");
    const todo = {
      index: +task.index,
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      priority: task.priority,
      project: task.project,
    };

    await editOnFirebase(todo);
    fetchTodos(render);

    //todos[index] = todo;
    // todos[todo.index] = todo;
  };

  return {
    todos,
    addTask,
    newTask,
    editTask,
    projects,
    getProject,
    getAllProjects,
    getProjectLi,
    setProject,
    addProject,
    getTodos,
    getTotalTodos,
    fetchTodos,
    deleteOnFirebase,
    fetchProjects,
  };
};

export default model;
