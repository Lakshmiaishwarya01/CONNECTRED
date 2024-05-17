import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Menu from "../components/menu";
import "../styles/patientreq.css";
import { db } from "../firebase/firebase"; 
import { ref, get } from 'firebase/database';

const Request = () => {
  const location = useLocation();
  const { hospitalName } = location.state || {};
  const [patientRequests, setPatientRequests] = useState([]);
  console.log(hospitalName);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(ref(db, 'patient'));
        const data = snapshot.val();
        if (data) {
          const filteredRequests = Object.values(data).filter(
            (request) => request.hospital === hospitalName
          );
          setPatientRequests(filteredRequests);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (hospitalName) {
      fetchData();
    }
  }, [hospitalName]); 

  return (
    <div className="patient">
      <Menu hospitalName={hospitalName} />
      <div className="overlap-2">
        <div className="text-wrapper-24">Patient Requests</div>
        {patientRequests.map((request, index) => (
          <div key={index} className="overlap-3" style={{ top: `${index * 180}px` }}>
            <div className="text-wrapper-11">
              Blood Group : {request.bloodGroup}
            </div>
            <div className="text-wrapper-16">
              Patient Name: {request.patientName}
            </div>
            <div className="text-wrapper-12">
              Urgency level : {request.urgencyLevel}
            </div>
            <button className="rectangle">
              <div className="text-wrapper-13">Confirm Request</div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Request;
