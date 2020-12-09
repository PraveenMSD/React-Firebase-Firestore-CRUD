import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBOXkoWRC8gEU6f7m0dCHE4p0jaSmNrh3c",
  authDomain: "blog-app-fd358.firebaseapp.com",
  databaseURL: "https://blog-app-fd358.firebaseio.com",
  projectId: "blog-app-fd358",
  storageBucket: "blog-app-fd358.appspot.com",
  messagingSenderId: "445586209749",
  appId: "1:445586209749:web:b57b025312bf3355acdb5c",
  measurementId: "G-MHKY4GNGL0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;
