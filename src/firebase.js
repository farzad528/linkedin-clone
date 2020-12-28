import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAr3MAkHOHKekAsF1v4-uvkGsa0jqDS9WI",
  authDomain: "linkedin-clone-18759.firebaseapp.com",
  projectId: "linkedin-clone-18759",
  storageBucket: "linkedin-clone-18759.appspot.com",
  messagingSenderId: "417337084846",
  appId: "1:417337084846:web:b8c6aedb5a6527d676963f",
  measurementId: "G-P1YH6G90JJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
