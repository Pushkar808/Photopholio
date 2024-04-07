import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsdhvBMZYofw9HDbtbFRvdTsU1LpiiE9Y",
  authDomain: "cn-practice.firebaseapp.com",
  projectId: "cn-practice",
  storageBucket: "cn-practice.appspot.com",
  messagingSenderId: "1010468307248",
  appId: "1:1010468307248:web:74d11fa8ac02f3e0bc08f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
