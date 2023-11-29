import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

//STORED THE FIREBASE DETAILS IN .env.local FILE

const firebaseConfig = {
  apiKey: "AIzaSyArSUvb0C7FzE1QYwTZpf4PQs-758O9PXY",
  authDomain: "medicare-b0fdc.firebaseapp.com",
  projectId: "medicare-b0fdc",
  storageBucket: "medicare-b0fdc.appspot.com",
  messagingSenderId: "170120827566",
  appId: "1:170120827566:web:68bfc418ae798b26e0133f"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
