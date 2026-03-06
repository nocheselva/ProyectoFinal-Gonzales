
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwuTwLCiJbO0FbMaHmvfXJh2luxgjSpR0",
  authDomain: "buscadog-b79dc.firebaseapp.com",
  projectId: "buscadog-b79dc",
  storageBucket: "buscadog-b79dc.firebasestorage.app",
  messagingSenderId: "637431999426",
  appId: "1:637431999426:web:575728d397567b62aa445b",
  measurementId: "G-CJR0G24S9E"
};



const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);