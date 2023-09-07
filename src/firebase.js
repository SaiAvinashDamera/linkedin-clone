import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBw2hYZYgilAsbyd_NozNlBNydqW2F-esU",
  authDomain: "linkedin-clone-f8390.firebaseapp.com",
  projectId: "linkedin-clone-f8390",
  storageBucket: "linkedin-clone-f8390.appspot.com",
  messagingSenderId: "3327490830",
  appId: "1:3327490830:web:8a342d37baa7d927f5755f",
  measurementId: "G-KG1QG2RJPS",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
