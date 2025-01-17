// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV2WMHZMMb32senKfgOgVDNgLRNjzB-ac",
  authDomain: "fir-crud-5ef32.firebaseapp.com",
  projectId: "fir-crud-5ef32",
  storageBucket: "fir-crud-5ef32.firebasestorage.app",
  messagingSenderId: "589047188562",
  appId: "1:589047188562:web:ac36b2dcc3c4f98680638b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

export {database};