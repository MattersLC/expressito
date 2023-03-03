// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT5aWWFFjakySAVZe6ItqwO4Y8HulOO1o",
  authDomain: "expressito.firebaseapp.com",
  projectId: "expressito",
  storageBucket: "expressito.appspot.com",
  messagingSenderId: "830248734391",
  appId: "1:830248734391:web:9f54973fe361f227a30732",
  measurementId: "G-GTD2RCXK06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);