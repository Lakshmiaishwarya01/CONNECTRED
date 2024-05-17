import React, { useState } from "react";
import Menu from '../components/menu';
import "../styles/requirement.css";
import { ref, push } from 'firebase/database';
import { db } from '../firebase/firebase';
import { useLocation } from "react-router-dom";

const Requirement = ({ hospitalName }) => {
  const ls=useLocation()
  console.log(ls.state)
  console.log("hospitalName in Requirement component:", ls.state);

  const [submitted, setSubmitted] = useState(false);
  const [patientName, setPatientName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [urgencyLevel, setUrgencyLevel] = useState("");

  const handleSubmit = () => {
    console.log("Submitting form...");
    console.log("hospitalName in handleSubmit:", ls.state);

    if (patientName && bloodGroup && urgencyLevel) {
      console.log("All fields are filled");
      console.log("Pushing data to database...");

      push(ref(db, 'hospreq'), {
        patientName,
        bloodGroup,
        urgencyLevel,
        hospitalName:ls.state,
      }).then(() => {
        console.log("Data pushed successfully");
        setPatientName(""); 
        setBloodGroup("");  
        setUrgencyLevel(""); 
        setSubmitted(true);
      }).catch((error) => {
        console.error('Error adding document: ', error);
      });

    } else {
      alert("Please fill in all required fields.");
    }
  };

  const handleClose = () => {
    console.log("Closing popup...");
    setSubmitted(false);
  };

  return (
    <div className="dashboard">
      <div className="div">
        <Menu hospitalName={hospitalName}/>
        <div className="overlap-2">
          <div className="text-wrapper-12">Post a requirement</div>
          <div className="text-wrapper-13">Enter patient name</div>
          <input
            type="text"
            className="rectangle"
            placeholder="Enter name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
          <div className="text-wrapper-11">Select blood group</div>
          <select
            className="img-wrapper"
            onChange={(e) => setBloodGroup(e.target.value)}
            value={bloodGroup}
            required
          >
            <option value="" disabled>Select blood group</option>
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
          <select
            className="back-wrapper"
            onChange={(e) => setUrgencyLevel(e.target.value)}
            value={urgencyLevel}
            required
          >
            <option value="" disabled>Select urgency level</option>
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