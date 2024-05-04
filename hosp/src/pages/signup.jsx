
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/signup.css";
import { connect } from 'react-redux';
import { useAuth } from '../../contexts/authcontext'
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";

export const Sign = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [hospitalName, setHospitalName] = useState("")


  return (
    <div className="signuppage">
      <div className="div">
        <div className="group">
          <p className="connectred">
            <span className="text-wrapper">co</span>
            <span className="span">nn</span>
            <span className="text-wrapper-2">ec</span>
            <span className="text-wrapper-3">tr</span>
            <span className="text-wrapper-4">ed</span>
          </p>
        </div>
        <div className="overlap">
          <p className="p">
            <span className="text-wrapper-5">co</span>
            <span className="text-wrapper-6">nn</span>
            <span className="text-wrapper-7">ec</span>
            <span className="text-wrapper-8">tr</span>
            <span className="text-wrapper-9">ed</span>
          </p>
          <div className="overlap-wrapper">
            <div className="overlap-group">
              <div className="rectangle" />
              <div className="text-wrapper-10">Sign Up</div>
              <div className="group-2">
                <div className="text-wrapper-11">Organization email</div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-wrapper-12"
                  placeholder="Enter email"
                />
              </div>
              <div className="div-wrapper">
                <div className="overlap-2">
                  <div className="text-wrapper-13">Sign Up</div>
                </div>
              </div>
              <div className="group-3">
                <div className="text-wrapper-11">Choose Password</div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-wrapper-12"
                  placeholder="Enter password"
                />
              </div>
              <div className="group-5">
                <div className="text-wrapper-11">Hospital Name</div>
                <input
                  type="text"
                  value={hospitalName}
                  onChange={(e) => setHospitalName(e.target.value)}
                  className="text-wrapper-12"
                  placeholder="Enter hospital name"
                />
              </div>
              <div className="group-7">
                <button className="sign-up-button" onClick={handleSignUp}>Sign Up</button>
              </div>
              <div className="group-6">
                <div className="rectangle-3" />
                <p className="by-pressing-the">
                  <span className="text-wrapper-15">By pressing the button above, you agree to our </span>
                  <span className="text-wrapper-16">Terms of Service</span>
                  <span className="text-wrapper-17">&nbsp;</span>
                  <span className="text-wrapper-15">and</span>
                  <span className="text-wrapper-17">&nbsp;</span>
                  <span className="text-wrapper-16">Privacy Policy.</span>
                </p>
              </div>
              <div className="group-wrapper">
                <div className="frame-wrapper">
                  <div className="frame">
                    <img className="image" alt="Image" src="image-2.png" />
                    <button className="text-wrapper-18" onClick={handleSignInWithGoogle}>Sign Up with Google</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-3">
          <div className="rectangle-4" />
          <div className="text-wrapper-19">Login</div>
        </div>
        <div className="overlap-4">
          <Link className="rectangle-5" to="/desktop" />
          <div className="text-wrapper-20">Sign Up</div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signInWithGoogle: () => dispatch(signInWithGoogle()),
});

export default connect(null, mapDispatchToProps)(Sign);

