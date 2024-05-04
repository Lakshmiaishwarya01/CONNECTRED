// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmc5SKWkLMeYUdb-weNHU-r_A1p_eBHI8",
  authDomain: "connectred.firebaseapp.com",
  projectId: "connectred",
  storageBucket: "connectred.appspot.com",
  messagingSenderId: "188929971012",
  appId: "1:188929971012:web:0f6d7528d27afc4ef23d11",
  measurementId: "G-QS3R1LP05H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
