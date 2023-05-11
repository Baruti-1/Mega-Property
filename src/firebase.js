// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "mega-property-3c21b.firebaseapp.com",
  projectId: "mega-property-3c21b",
  storageBucket: "mega-property-3c21b.appspot.com",
  messagingSenderId: "446607962258",
  appId: "1:446607962258:web:7114a860de16bba055364b",
  measurementId: "G-4KYPB0D7FH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
