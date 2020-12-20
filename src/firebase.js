// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjQZq-8Gbed6UjXPZntDYuoGZPaJo08Uw",
  authDomain: "nwitter-f04ec.firebaseapp.com",
  projectId: "nwitter-f04ec",
  storageBucket: "nwitter-f04ec.appspot.com",
  messagingSenderId: "198903696715",
  appId: "1:198903696715:web:e89672b0b071def3092cce",
  measurementId: "G-XEV6QK7BSX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();