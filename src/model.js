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
  var addProject = async (val) => {
    try {
      let docRef = collection(db, "projects");
      let index = projects.length - 2;
      await addDoc(docRef, { projectName: val, index: index });
    } catch (error) {}
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

  //Delete Project
  const deleteCurrentProject = async () => {
    // get Current Project

    // check current project is deletable
    if (current === "Inbox" || current === "Urgent" || current === "View All") {
      alert(`Sorry, I can't delete ${current}. That would be CRAZY`);
    } else {
      // Query Project in Firestore
      let projectsRef = collection(db, "projects");
      let projectQuery = query(
        projectsRef,
        where("projectName", "==", current)
      );
      let projectSnapShot = await getDocs(projectQuery);

      // Delete Project

      for (const project of projectSnapShot.docs) {
        if (project.exists) {
          await deleteDoc(project.ref);
        } else {
          console.log("error, project does not exist ");
        }
      }

      // projectSnapShot.forEach(async (doc) => {
      //   if (doc.exists) {
      //     await deleteDoc(doc.ref);
      //   } else {
      //     console.log("error, doc does not exist ");
      //   }
      // });

      // Query Tasks with Current Project
      const batch = writeBatch(db);
      let tasksRef = collection(db, "tasks");
      let taskQuery = query(tasksRef, where("project", "==", current));
      let taskSnapShot = await getDocs(taskQuery);

      for (const doc of taskSnapShot.docs) {
        console.log("deleting doc: " + JSON.stringify(doc.ref));
        batch.delete(doc.ref);
      }
      // Batch Delete tasks
      // taskSnapShot.forEach((doc) => {
      //   console.log("deleting doc: " + doc.ref);
      //   batch.delete(doc.ref);
      // });
      await batch.commit();
      console.log("deletes complete");

      //Batch update index on projects
      let batchIndex = writeBatch(db);
      let collectionProjectIndex = collection(db, "projects");
      let projectIndexSnapshot = await getDocs(collectionProjectIndex);
      let i = 0;

      for (let i = 0; i < projectIndexSnapshot.docs.length; i++) {
        console.log("updating project index");
        console.log(projectIndexSnapshot.docs[i].ref, i);
        batchIndex.update(projectIndexSnapshot.docs[i].ref, { index: i });
      }

      await batchIndex.commit();
    }
  };

  var addTask = async (task, render) => {
    if (task.index === undefined) {
      await newTask(task, render);
    } else if (Number.isInteger(+task.index)) {
      await editTask(task, render);
    } else {
      alert("error in adding task");
    }
  };

  var getTotalTodos = () => {
    return todos;
  };

  var getTodos = () => {
    console.log("getting current: " + current);
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

  const getTodoLength = (project) => {
    let todos = getTotalTodos();
    let filteredTodos = todos.filter((todo) => {
      return todo.project === project;
    });
    return filteredTodos.length;
  };

  //Managing projects

  const updateLocalProjects = (projectArray) => {
    projects = projectArray;
  };

  const fetchProjects = async function getProjectsFromFirestore(
    renderProjects
  ) {
    let collectionRef = collection(db, "projects");
    let q = query(collectionRef, orderBy("index"));
    let snapShot = await getDocs(q);
    let projectArray = snapShot.docs.map((doc) => {
      let docData = doc.data();
      return docData.projectName;
    });

    //Reorganize order of projects
    let defaults = ["Inbox", "Urgent"];
    let allProjects = [...defaults, ...projectArray];

    updateLocalProjects(allProjects);
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
    console.log("rendering");

    async function fetching() {
      const collectionRef = collection(db, "tasks");
      const q = query(collectionRef, orderBy("index"));
      const querySnapshot = await getDocs(q);
      const newTodos = await updateLocalTodos(querySnapshot);
      return newTodos;
    }
    let todos = await fetching();

    setTodos(todos);
    console.log(todos);
    render();
  };

  const uploadTask = async function uploadTaskToFirebase(todo, render) {
    try {
      const docRef = await addDoc(collection(db, "tasks"), todo);
      console.log("Document saved with id: " + docRef.id);
      await fetchTodos(render);
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

    for (const doc of querySnapshot.docs) {
      if (doc.exists) {
        await deleteDoc(doc.ref);
        await fetchTodos(render);
      } else {
        console.log("document not found");
      }
    }

    // //Delete item
    // querySnapshot.forEach(async (doc) => {
    //   if (doc.exists) {
    //     await deleteDoc(doc.ref);
    //     await fetchTodos(render);
    //     console.log("INSIDE QUERYSNAPSHOT");
    //   } else {
    //     console.log("document not found");
    //   }
    // });
  };

  var newTask = async (task, render) => {
    const todo = {
      index: todos.length,
      project: task.project,
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      priority: task.priority,
    };

    await uploadTask(todo, render);
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
    const todo = {
      index: +task.index,
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      priority: task.priority,
      project: task.project,
    };

    await editOnFirebase(todo);
    await fetchTodos(render);

    //todos[index] = todo;
    // todos[todo.index] = todo;
  };

  return {
    todos,
    addTask,
    newTask,
    editTask,
    projects,
    deleteCurrentProject,
    getProject,
    getAllProjects,
    getProjectLi,
    setProject,
    addProject,
    getTodos,
    getTotalTodos,
    getTodoLength,
    fetchTodos,
    deleteOnFirebase,
    fetchProjects,
  };
};

export default model;
