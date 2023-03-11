import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmR9f4DGv_LzpRQl3u8eNT7qqkXIlZ57E",
  authDomain: "netflix-13980.firebaseapp.com",
  projectId: "netflix-13980",
  storageBucket: "netflix-13980.appspot.com",
  messagingSenderId: "22617733403",
  appId: "1:22617733403:web:0d86009cef959978e2fbbe",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { app, auth, db };
