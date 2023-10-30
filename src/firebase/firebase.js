import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArz8_WB2h3QvCIX_Dd5zBtcX18mAQeMxo",
  authDomain: "clashlayout-cc75f.firebaseapp.com",
  projectId: "clashlayout-cc75f",
  storageBucket: "clashlayout-cc75f.appspot.com",
  messagingSenderId: "139548364508",
  appId: "1:139548364508:web:eb41cc6312851fcf9f6e19"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };