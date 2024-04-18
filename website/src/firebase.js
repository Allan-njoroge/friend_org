// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN-TOWMPADxiblDeKdoJkNrjGMukOPhXg",
  authDomain: "rafikistry-cbd1c.firebaseapp.com",
  projectId: "rafikistry-cbd1c",
  storageBucket: "rafikistry-cbd1c.appspot.com",
  messagingSenderId: "1006445489216",
  appId: "1:1006445489216:web:12583ab8ba56f6100d83a5",
  measurementId: "G-G3KRP7E6Z7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFireStore(app);