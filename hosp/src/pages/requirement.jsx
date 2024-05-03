import React, { useState } from "react";
import Menu from '../components/menu';
import "../styles/requirement.css";

const Requirement = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
  };

  return (
    <div className="dashboard">
      <div className="div">
        <Menu />
        <div className="overlap-2">
          <div className="text-wrapper-12">Post a requirement</div>
          <div className="text-wrapper-13">Enter patient name</div>
          <input type="text" className="rectangle" placeholder="Enter name" />
          <div className="text-wrapper-11">Select blood group</div>
          <select className="img-wrapper" placeholder="Enter name">
            <option value="" disabled selected>Select blood group</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="O+">O+</option>
            <option value="AB+">AB+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="O-">O-</option>
            <option value="AB-">AB-</option>
          </select>
          <div className="text-wrapper-10">Select urgency level</div>
          <select className="back-wrapper" placeholder="Enter name" >
            <option value="" disabled selected>Select urgency level</option>
            <option value="urgent">Urgent</option>
            <option value="emergency">Emergency</option>
          </select>
          <button className="div-wrapper" onClick={handleSubmit}>
            <div className="text-wrapper-14">Submit</div>
          </button>
          {submitted && (
            <div className="popup">
              <button className="close-btn" onClick={handleClose}>X</button>
              <p className="success-message">Successfully submitted!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Requirement;
