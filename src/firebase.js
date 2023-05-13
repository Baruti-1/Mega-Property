import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2b9DfCwVmWYgC7zLjaHTt3Aj09t4WhNs",
  authDomain: "mega-property-1d9f1.firebaseapp.com",
  projectId: "mega-property-1d9f1",
  storageBucket: "mega-property-1d9f1.appspot.com",
  messagingSenderId: "343168757226",
  appId: "1:343168757226:web:25e6f15f681af1d8625693",
  measurementId: "G-Y8GK20KYJ9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
