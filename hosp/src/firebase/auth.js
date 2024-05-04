import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";


// Function to handle sign-in with Google
export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("User signed in with Google:", user);
    return user;
  } catch (error) {
    console.error("Error signing in with Google:", error.message);
    throw error;
  }
};

// Function to handle user sign-up with email and password
export const signInWithEmailAndPassword = async (email, password) => {
  // Your signUpWithEmailAndPassword function implementation
};
