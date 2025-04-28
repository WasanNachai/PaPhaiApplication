// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAAR5ZPqG4a5PZvkQ7DdNz9OFeYr7fVn0",
  authDomain: "paphaiapp.firebaseapp.com",
  projectId: "paphaiapp",
  storageBucket: "paphaiapp.firebasestorage.app",
  messagingSenderId: "655375681612",
  appId: "1:655375681612:web:f4ecd112938450f7d98ce9",
  measurementId: "G-XDJ83CFY9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };