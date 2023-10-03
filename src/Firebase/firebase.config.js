// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmSIKaBpZslPYg-CGCIp-Bzelja-bGVxs",
  authDomain: "dragon-news-auth-a4d22.firebaseapp.com",
  projectId: "dragon-news-auth-a4d22",
  storageBucket: "dragon-news-auth-a4d22.appspot.com",
  messagingSenderId: "72333270711",
  appId: "1:72333270711:web:4e464a1a0b4b37a635f732"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;