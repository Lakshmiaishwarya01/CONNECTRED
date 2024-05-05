import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/signup.css";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const isEmailValid = (email) => {
    // Regular expression to validate email format
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSignup = () => {
    if (name && isEmailValid(email) && password.length >= 8) {
      console.log("Signing up...");
    } else {
      alert("Please fill out all fields correctly.");
      setFormSubmitted(true);
    }
  };

  return (
    <div className="signuppage">
      <div className="div">
        <div className="connectred-wrapper">
          <p className="connectred">connectred</p>
          <p className="hospital">.hospital</p>
        </div>
        <div className="overlap">
          <p className="p">connectred</p>
          <div className="overlap-wrapper">
            <div className="overlap-group">
              <div className="rectangle" />
              <div className="text-wrapper-10">Sign Up</div>
              <div className="group-2">
                <div className="text-wrapper-11">Organization email</div>
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-12">examplemail@kmch.org</div>
                    <input
                      type="text"
                      className="rectangle-2"
                      placeholder="examplemail@kmch.org"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="div-wrapper">
                {(name && isEmailValid(email) && password.length >= 8) || formSubmitted ? (
                  <Link to="/requirement">
                    <button className="overlap-2" onClick={handleSignup}>
                      <div className="text-wrapper-8">Sign Up</div>
                    </button>
                  </Link>
                ) : (
                  <button className="overlap-2" onClick={handleSignup}>
                    <div className="text-wrapper-8">Sign Up</div>
                  </button>
                )}
              </div>
              <div className="group-3">
                <div className="text-wrapper-11">Choose Password</div>
                <div className="group-4">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-12">Minimum 8 characters</div>
                    <input
                      type="password"
                      className="rectangle-2"
                      placeholder="Minimum 8 characters"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <div className="text-wrapper-14">Show</div>
                  </div>
                </div>
              </div>
              <div className="group-5">
                <div className="text-wrapper-11">Hospital Name</div>
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-12">Kottayam Medical College Hospital</div>
                    <input
                      type="text"
                      className="rectangle-2"
                      placeholder="Kottayam Medical College Hospital"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
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
                    <div className="text-wrapper-18">Sign Up with Google</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-3">
          <Link to="/login">
            <button className="rectangle-4">
              <div className="text-wrapper-19">Login</div>
            </button>
          </Link>
        </div>
        <div className="overlap-4">
          <Link to="/signup">
            <button className="rectangle-5">
              <div className="text-wrapper-20">Sign Up</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Signup;
