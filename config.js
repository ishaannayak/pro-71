import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBV64q5hbUtaIiMjB0mH2RMZRVFEOwAS4w",
    authDomain: "pro-71-d010e.firebaseapp.com",
    projectId: "pro-71-d010e",
    storageBucket: "pro-71-d010e.appspot.com",
    messagingSenderId: "303980561569",
    appId: "1:303980561569:web:082e602015877e3c689ce0"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
