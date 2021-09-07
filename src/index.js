import "core-js/stable";
import "regenerator-runtime/runtime";

import View from "./view.js";
import Model from "./model.js";
import Controller from "./controller.js";
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";

("use strict");

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

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

//Instatiate
const model = Model();
const controller = Controller(model);
const view = View(controller);

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

let readDocs = async function () {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  });
};

//Materialize
M.AutoInit();
