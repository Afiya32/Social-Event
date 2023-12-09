// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdRTmaK_1tFAiSY1o2ueACqM_7QnHCOtQ",
  authDomain: "socai-events.firebaseapp.com",
  projectId: "socai-events",
  storageBucket: "socai-events.appspot.com",
  messagingSenderId: "229505401829",
  appId: "1:229505401829:web:52177cdb3c42b51659a50c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
