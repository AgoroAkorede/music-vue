// import firebase from "firebase/app";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
