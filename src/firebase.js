// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyApR4x-bQI3tyTUEodh280u-5hSAj6LjZI",
  authDomain: "quicky-c9bf8.firebaseapp.com",
  projectId: "quicky-c9bf8",
  storageBucket: "quicky-c9bf8.appspot.com",
  messagingSenderId: "819262511354",
  appId: "1:819262511354:web:a43ede9c05b944d1805143",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
