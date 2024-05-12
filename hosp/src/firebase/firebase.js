import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase} from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCmc5SKWkLMeYUdb-weNHU-r_A1p_eBHI8",
  authDomain: "connectred.firebaseapp.com",
  databaseURL: "https://connectred-default-rtdb.firebaseio.com",
  projectId: "connectred",
  storageBucket: "connectred.appspot.com",
  messagingSenderId: "188929971012",
  appId: "1:188929971012:web:32cf64ae5f9aa181f23d11",
  measurementId: "G-ELLWHK8DFN"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db };