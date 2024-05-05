import React from "react";
import { Link } from "react-router-dom";
import "../styles/signup.css";

export const Desktop = () => {
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
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-12">examplemail@kmch.org</div>
                    <div className="rectangle-2" />
                    <img className="img" alt="Sms" src="sms.png" />
                  </div>
                </div>
              </div>
              <div className="div-wrapper">
                <div className="overlap-2">
                  <div className="text-wrapper-13">Sign Up</div>
                </div>
              </div>
              <div className="group-3">
                <div className="text-wrapper-11">Choose Password</div>
                <div className="group-4">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-12">Minimum 8 characters</div>
                    <div className="rectangle-2" />
                    <img className="img" alt="Lock" src="lock.png" />
                    <div className="text-wrapper-14">Show</div>
                  </div>
                </div>
              </div>
              <div className="group-5">
                <div className="text-wrapper-11">Hospital Name</div>
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-12">Kottayam Medical College Hospital</div>
                    <div className="rectangle-2" />
                    <img className="img" alt="Vuesax linear user" src="user.svg" />
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
                    <img className="image" alt="Image" src="image-2.png" />
                    <div className="text-wrapper-18">Sign Up with Google</div>
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
export default Desktop;
