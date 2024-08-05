// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc, getDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-aok3m8EvU4CCqRnXRd-pPB-SHxLloX0",
  authDomain: "contact-book-74a5f.firebaseapp.com",
  projectId: "contact-book-74a5f",
  storageBucket: "contact-book-74a5f.appspot.com",
  messagingSenderId: "931134247500",
  appId: "1:931134247500:web:10f1266825e523a063dae9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, addDoc, updateDoc, deleteDoc, doc, getDoc };

