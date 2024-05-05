import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      console.log("Logging in...");
    } else {
      alert("All fields are required.");
      setFormSubmitted(true);
    }
  };

  return (
    <div className="loginpage">
      <div className="div">
        <div className="connectred-wrapper">
          <p className="connectred">connectred</p>
          <p className="hospital">.hospital</p>
        </div>

        <div className="overlap">
          <p className="p">connectred</p>
          <div className="group-wrapper">
            <div className="overlap-wrapper">
              <div className="overlap-group">
                <div className="text-wrapper-5">Login</div>
                <div className="group-2">
                  <div className="group-3">
                    <div className="text-wrapper-6">Organization email</div>
                    <div className="overlap-group-wrapper">
                      <div className="overlap-group-2">
                        <div className="text-wrapper-7">Enter email</div>
                        <input
                          type="text"
                          className="rectangle"
                          placeholder="Enter email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="div-wrapper">
                   
                    {(email && password) || formSubmitted ? (
                      <Link to="/requirement">
                        <button className="overlap-2" onClick={handleLogin}>
                          <div className="text-wrapper-8">Log In</div>
                        </button>
                      </Link>
                    ) : (
                      <button className="overlap-2" onClick={handleLogin}>
                        <div className="text-wrapper-8">Log In</div>
                      </button>
                    )}
                  </div>
                  <div className="group-4">
                    <div className="group-5">
                      <div className="text-wrapper-6">Password</div>
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-2">
                          <div className="text-wrapper-9">Enter password</div>
                          <input
                            type="password"
                            className="rectangle"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="group-6">
                    <div className="frame">
                      <div className="text-wrapper-10">Login with Google</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-group-5">
          <Link to="/login">
            <button className="rectangle5">
              <div className="login2">Login</div>
            </button>
          </Link>
        </div>
        <div className="overlap-10">
          <Link to="/signup">
            <button className="rectangle10">
              <div className="signup2">Sign Up</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
