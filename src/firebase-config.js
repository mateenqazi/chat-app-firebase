// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxHqBbJuGvDK4QFJpfOmmMYqMqKsuZX6Y",
  authDomain: "chatapp-660d9.firebaseapp.com",
  projectId: "chatapp-660d9",
  storageBucket: "chatapp-660d9.appspot.com",
  messagingSenderId: "100216033909",
  appId: "1:100216033909:web:4c7aa65944b0c635af5e3c",
  measurementId: "G-3BC22ELNYC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
