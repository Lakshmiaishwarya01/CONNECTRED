import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

export const Desktop = () => {
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
                    <div className="overlap-group-wrapper">
                      <div className="overlap-group-2">
                        <div className="text-wrapper-7">Enter email</div>
                        <div className="rectangle" />
                        <img className="img" alt="Sms" src="sms.png" />
                      </div>
                    </div>
                  </div>
                  <div className="div-wrapper">
                    <div className="overlap-2">
                      <div className="text-wrapper-8">Log In</div>
                    </div>
                  </div>
                  <div className="group-4">
                    <div className="group-5">
                      <div className="text-wrapper-6">Password</div>
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-2">
                          <div className="text-wrapper-9">Enter password</div>
                          <div className="rectangle" />
                          <img className="img" alt="Lock" src="lock.png" />
                          <img className="eye-slash" alt="Eye slash" src="eye-slash.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-6">
                    <div className="frame-wrapper">
                      <div className="frame">
                        <img className="image" alt="Image" src="image-2.png" />
                        <div className="text-wrapper-10">Login with Google</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-3">
          <Link className="rectangle-2" to="/loginpage" />
          <div className="text-wrapper-11">Login</div>
        </div>
        <div className="overlap-4">
          <div className="rectangle-3" />
          <div className="text-wrapper-12">Sign Up</div>
        </div>
      </div>
    </div>
  );
};
export default Desktop;
