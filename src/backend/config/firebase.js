// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWAORZWB1r8a0iSPZBgkbk5zLlZ0GvMKY",
  authDomain: "diploma-f782f.firebaseapp.com",
  projectId: "diploma-f782f",
  storageBucket: "diploma-f782f.appspot.com",
  messagingSenderId: "342168872492",
  appId: "1:342168872492:web:a0551ff76da66d08699389"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const firestore = app.firestore();
