import firebase from "firebase/app";
import "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCeOry-LbVV-fDOf0ysiSZuKpbaZwXLz2k",
  authDomain: "djamware-17035.firebaseapp.com",
  projectId: "djamware-17035",
  storageBucket: "djamware-17035.appspot.com",
  messagingSenderId: "440857038975",
  appId: "1:440857038975:web:8f675252d3baa415f96f4a",
  measurementId: "G-3DSKJTQTM6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;
