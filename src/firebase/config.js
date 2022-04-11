import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCX2sk_t_r83TH9lRXmNYWnOg3JTYMuDvs",
  authDomain: "mymoney-dfe9c.firebaseapp.com",
  projectId: "mymoney-dfe9c",
  storageBucket: "mymoney-dfe9c.appspot.com",
  messagingSenderId: "62383971936",
  appId: "1:62383971936:web:cf7f593a42814f62506d05",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
