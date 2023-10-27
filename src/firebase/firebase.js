import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdyTqvViyqtLETSrNMzqFP-xM0NIa9lQ8",
    authDomain: "clashlayouts-9d19d.firebaseapp.com",
    projectId: "clashlayouts-9d19d",
    storageBucket: "clashlayouts-9d19d.appspot.com",
    messagingSenderId: "1073716509146",
    appId: "1:1073716509146:web:56713b2e4bf310187b28e3"
  };

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };