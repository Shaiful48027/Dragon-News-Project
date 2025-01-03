// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS0Fy358x9_IqTHmrH348M9D7XQvq3EVU",
  authDomain: "dragon-news-25.firebaseapp.com",
  projectId: "dragon-news-25",
  storageBucket: "dragon-news-25.firebasestorage.app",
  messagingSenderId: "86464861390",
  appId: "1:86464861390:web:30e2d5060ce6ceeed6ec9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;