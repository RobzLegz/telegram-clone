import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB0DqFHDf4C4YhXyYc97hyYbrA0UVGMB08",
    authDomain: "telegram-clone-8906f.firebaseapp.com",
    projectId: "telegram-clone-8906f",
    storageBucket: "telegram-clone-8906f.appspot.com",
    messagingSenderId: "1094030694715",
    appId: "1:1094030694715:web:79b329eb22c0527f31ff1e",
    measurementId: "G-RQVH7PYK59"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore;
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;