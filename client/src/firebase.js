// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-7a441.firebaseapp.com",
  projectId: "mern-blog-7a441",
  storageBucket: "mern-blog-7a441.appspot.com",
  messagingSenderId: "117102681118",
  appId: "1:117102681118:web:2bbd3e97535d550094e20f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);