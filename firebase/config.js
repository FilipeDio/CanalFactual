// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getFirebase} from "firebase/firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjwOoddWMEJkW6GWp3mcOy8um1yhb5sPw",
  authDomain: "canal-factual.firebaseapp.com",
  projectId: "canal-factual",
  storageBucket: "canal-factual.firebasestorage.app",
  messagingSenderId: "722606748006",
  appId: "1:722606748006:web:5b6255ecfaf9597eab58a7",
  measurementId: "G-GKG8X6MEC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db =getFirebase(app);
export {db}