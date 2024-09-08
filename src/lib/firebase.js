import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "nchattingapp.firebaseapp.com",
  projectId: "nchattingapp",
  storageBucket: "nchattingapp.appspot.com",
  messagingSenderId: "993718625122",
  appId: "1:993718625122:web:16d596fec0a5f6fcd2423b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()