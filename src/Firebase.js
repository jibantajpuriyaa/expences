// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIhKjHnf1O8ShoUO60EdOofjfZ1nYnL28",
  authDomain: "expences-app-3f89a.firebaseapp.com",
  projectId: "expences-app-3f89a",
  storageBucket: "expences-app-3f89a.firebasestorage.app",
  messagingSenderId: "311737322810",
  appId: "1:311737322810:web:7a87dac68a80a5f2679403",
  measurementId: "G-PHVNCRRM6H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const database = getDatabase(app);
const analytics = getAnalytics(app);