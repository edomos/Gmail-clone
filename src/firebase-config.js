import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCzu-oINdBGQY3nriDJmwSItqqC3oIZhk",
    authDomain: "clone-3c47a.firebaseapp.com",
    projectId: "clone-3c47a",
    storageBucket: "clone-3c47a.appspot.com",
    messagingSenderId: "523825315706",
    appId: "1:523825315706:web:a1dbd18204319e4e87e0c3"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // firestore database
  export const db = getFirestore()