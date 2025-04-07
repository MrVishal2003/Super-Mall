import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyATVAuIwyt-YGENT9FXdpwfUFbqjutbqCM",
    authDomain: "e-commerce-4f9f6.firebaseapp.com",
    projectId: "e-commerce-4f9f6",
    storageBucket: "e-commerce-4f9f6.firebasestorage.app",
    messagingSenderId: "593268219739",
    appId: "1:593268219739:web:9e8c4a7b424fcc566a847e",
  };

// Read ReadMe.MD on GitHub to setup this project properly
// https://github.com/itfeelsharsh/shop/blob/main/README.md

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const db = getFirestore(app);
