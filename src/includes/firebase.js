/* eslint-disable no-unused-vars */
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaSyBWLjeu2o9WbvJTjeEL1JX6L-K87K7XjQU",
  authDomain: "vue-music-1344d.firebaseapp.com",
  projectId: "vue-music-1344d",
  storageBucket: "vue-music-1344d.appspot.com",
  messagingSenderId: "788588795910",
  appId: "1:788588795910:web:14b3acd6bd8e7df6f3cb87",
  measurementId: "G-LY59TQ6ED1",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const usersCollection = db.collection("users");

export { auth, db, usersCollection };
