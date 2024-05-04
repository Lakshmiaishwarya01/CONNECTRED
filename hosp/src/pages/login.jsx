import React, { useState } from "react";
import { Navigate,Link } from "react-router-dom";
import { useAuth } from '../../contexts/authcontext'
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../firebase/auth"; // Import the signInWithGoogle function

import "../styles/login.css";

export const Desktop = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn,setIssigningIn] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault()
    if(!isSigningIn) {
      setIssigningIn(true)
      await doSignInWithEmailAndPassword(email,password)
    }
  }

  
  return (
    <div className="loginpage">
      <div className="div">
        <div className="group">
          <img className="connectred" alt="Connectred" src="connectred.png" />
        </div>
        <div className="overlap">
          <p className="p">
            <span className="text-wrapper">co</span>
            <span className="span">nn</span>
            <span className="text-wrapper-2">ec</span>
            <span className="text-wrapper-3">tr</span>
            <span className="text-wrapper-4">ed</span>
          </p>
          <div className="group-wrapper">
            <div className="overlap-wrapper">
              <div className="overlap-group">
                <div className="text-wrapper-5">Login</div>
                <div className="group-2">
                  <div className="group-3">
                    <div className="text-wrapper-6">Organization email</div>
                    <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)} // Update the email state with the value from the input field
  className="text-wrapper-7"
  placeholder="Enter email"
/>

                  </div>
                  <div className="div-wrapper">
                    <div className="overlap-2">
                      <div className="text-wrapper-8">Log In</div>
                    </div>
                  </div>
                  <div className="group-4">
                    <div className="group-5">
                      <div className="text-wrapper-6">Password</div>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="text-wrapper-9"
                        placeholder="Enter password"
                      />
                    </div>
                  </div>
                  <div className="group-6">
                    <button className="frame-wrapper" onClick={handleLogin}>
                      <div className="frame">
                        <div className="text-wrapper-10">Login</div>
                      </div>
                    </button>
                  </div>
                  <div className="group-7"> {/* Add this div for Google login button */}
                    <button className="google-login" onClick={handleGoogleLogin}>
                      <div className="google-icon"></div>
                      <div className="text-wrapper-11">Login with Google</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-3">
          <Link className="rectangle-2" to="/loginpage" />
          <div className="text-wrapper-12">Login</div>
        </div>
        <div className="overlap-4">
          <div className="rectangle-3" />
          <div className="text-wrapper-13">Sign Up</div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
