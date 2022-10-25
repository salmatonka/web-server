// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpA3jJaffinnDhlzLj7fXEFyWrY8uhxbw",
  authDomain: "web-technology-server.firebaseapp.com",
  projectId: "web-technology-server",
  storageBucket: "web-technology-server.appspot.com",
  messagingSenderId: "1830930807",
  appId: "1:1830930807:web:5ec943e81c33e043643972"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;