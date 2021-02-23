import firebase from "firebase/app";
import "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
// Firestore config
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;
