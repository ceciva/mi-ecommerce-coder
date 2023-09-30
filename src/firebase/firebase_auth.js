// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg-E5iBevhJMdeak7kHtntELaGXytzFFM",
  authDomain: "ecommerce-fa9c9.firebaseapp.com",
  databaseURL: "https://ecommerce-fa9c9-default-rtdb.firebaseio.com",
  projectId: "ecommerce-fa9c9",
  storageBucket: "ecommerce-fa9c9.appspot.com",
  messagingSenderId: "508538901427",
  appId: "1:508538901427:web:06e8d1395d4fba93a471c6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth(app);