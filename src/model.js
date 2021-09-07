import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";

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

  let addNew = async function () {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const fetchTodos = async function (render) {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    querySnapshot.forEach((doc) => {
      todos.push(doc.data());
    });

    render();
  };

  var todos = [
    {
      index: 0,
      project: "Inbox",
      title: "Hello Test",
      description: "This is a demo todo",
      dueDate: "September 1, 2021",
      priority: "High",
    },
  ];

  var filteredTodos = [];

  var projects = ["Inbox", "Urgent", "View All"];

  //Managing Projecs

  var current = "Inbox";

  var currentE;

  var addProject = (val) => {
    projects.push(val);
  };

  var setProject = (val, liCurrent) => {
    current = val;
    currentE = liCurrent;
  };

  var getProject = () => {
    return current;
  };

  var getProjectLi = () => {
    return currentE;
  };

  var addTask = (task) => {
    if (task.index === undefined) {
      newTask(task);
    } else {
      editTask(task);
    }
  };

  var getTotalTodos = () => {
    return todos;
  };

  var getTodos = () => {
    if (current === "View All") {
      current = "Inbox";
      console.log(todos);
      return todos;
    } else {
      let filtered = todos.filter((todo) => {
        return todo.project === current;
      });
      console.log(filtered);
      return filtered;
    }
  };

  //Managing tasks

  const uploadTask = async function (todo) {
    try {
      const docRef = await addDoc(collection(db, "tasks"), todo);
      console.log("Document saved with id: " + docRef.id);
    } catch (e) {
      console.log("error uploading todo: ", e);
    }
  };

  var newTask = (task) => {
    const todo = {
      index: todos.length,
      project: task.project,
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      priority: task.priority,
    };

    uploadTask(todo);
    //todos[index] = todo;
    todos.push(todo);
  };

  var editTask = (task) => {
    const todo = {
      index: task.index,
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      priority: task.priority,
      project: task.project,
    };

    //todos[index] = todo;
    todos[todo.index] = todo;
  };

  return {
    todos,
    addTask,
    newTask,
    editTask,
    projects,
    getProject,
    getProjectLi,
    setProject,
    addProject,
    getTodos,
    getTotalTodos,
    fetchTodos,
  };
};

export default model;
