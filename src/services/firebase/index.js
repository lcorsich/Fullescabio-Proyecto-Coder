// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFEOIkJrJ1COIcMajMd06DuFDlR7JySds",
  authDomain: "proyectoreact-592b3.firebaseapp.com",
  projectId: "proyectoreact-592b3",
  storageBucket: "proyectoreact-592b3.appspot.com",
  messagingSenderId: "1013734352829",
  appId: "1:1013734352829:web:ade0633fc6f392256f54d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)