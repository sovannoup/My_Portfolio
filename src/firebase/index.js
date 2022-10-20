import firebase from "firebase/compat/app";
import { signInAnonymously } from "firebase/compat/auth";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAb7CMR4Wcc5hFNlMYaHkBUj3QKK5AqGaU",
  authDomain: "personal-portfolio-082022.firebaseapp.com",
  projectId: "personal-portfolio-082022",
  storageBucket: "personal-portfolio-082022.appspot.com",
  messagingSenderId: "387064684358",
  appId: "1:387064684358:web:98c4a5551dac927a7a0f47",
  measurementId: "G-09TXWCCLWV",
});

let db = firebase.firestore();
var auth = firebase.auth;
// auth.signInAnonymously().catch(alert);
firebase.auth().onAuthStateChanged(async (user) => {
  if (!user) {
    await firebase
      .auth()
      .signInAnonymously()
      .catch((err) => {
        console.log(err);
      });
  }
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  firebase,
  auth,
  db,
};
