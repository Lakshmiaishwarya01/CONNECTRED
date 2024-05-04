import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCmc5SKWkLMeYUdb-weNHU-r_A1p_eBHI8",
  authDomain: "connectred.firebaseapp.com",
  projectId: "connectred",
  storageBucket: "connectred.appspot.com",
  messagingSenderId: "188929971012",
  appId: "1:188929971012:web:7e3b5c29f9cfd68ef23d11",
  measurementId: "G-XBQV3YV9XE"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const  auth = getAuth(app);

export {app,analytics,auth};