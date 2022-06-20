import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGC72vrgeAE0zRD2iRVMqPu4ZQPbWvUjw",
  authDomain: "clone-93ccb.firebaseapp.com",
  projectId: "clone-93ccb",
  storageBucket: "clone-93ccb.appspot.com",
  messagingSenderId: "86423563859",
  appId: "1:86423563859:web:ab421d80b630623192a0a6",
  measurementId: "G-EJQZ7VBHYQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
