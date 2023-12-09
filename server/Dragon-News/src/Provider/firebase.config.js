// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzyCJxHa3ZfeU3tohyyIgOVYUH7eAn_es",
  authDomain: "the-dragon-news-78dcc.firebaseapp.com",
  projectId: "the-dragon-news-78dcc",
  storageBucket: "the-dragon-news-78dcc.appspot.com",
  messagingSenderId: "328767386417",
  appId: "1:328767386417:web:1eb71ab2789615af59b610"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;