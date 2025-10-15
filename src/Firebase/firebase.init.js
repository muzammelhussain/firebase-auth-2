// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB47vfpyXcD_dBwZvUtC_-fLNHD7MZIyPI",
  authDomain: "fir-auth-two-ce69c.firebaseapp.com",
  projectId: "fir-auth-two-ce69c",
  storageBucket: "fir-auth-two-ce69c.firebasestorage.app",
  messagingSenderId: "687921417187",
  appId: "1:687921417187:web:60b89b0d6f2d1b33a2eed6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
