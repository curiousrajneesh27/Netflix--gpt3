// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxCFAmVgoyfLgx054q8epCq2hMOq_xxgE",
  authDomain: "netflixgpt-973f6.firebaseapp.com",
  projectId: "netflixgpt-973f6",
  storageBucket: "netflixgpt-973f6.firebasestorage.app",
  messagingSenderId: "272066354002",
  appId: "1:272066354002:web:90409bf17cf3245739b88b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);