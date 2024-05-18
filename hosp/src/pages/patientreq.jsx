import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Menu from "../components/menu";
import "../styles/patientreq.css";
import { db } from "../firebase/firebase"; 
import { ref, get, push } from 'firebase/database';

const Request = () => {
  const location = useLocation();
  const { hospitalName } = location.state || {};
  console.log("Hospital Name in Request component:", hospitalName);

  const [patientRequests, setPatientRequests] = useState([]);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };

    if (hospitalName) {
      fetchData();
    }
  }, [hospitalName]); 

  const handleConfirmRequest = async (request) => {
    try {
      const { hospital, ...requestData } = request; 
      await push(ref(db, 'hospreq'), { ...requestData, hospitalName }); 
      console.log("Request confirmed and added to hospreq:", { ...requestData, hospitalName });
      setPatientRequests(prevRequests => prevRequests.filter(req => req !== request));
      alert("Request confirmed!");
    } catch (error) {
      console.error("Error confirming request:", error);
    }
  };
  

  return (
    <div className="patient">
      <Menu hospitalName={hospitalName} />
      <div className="overlap-2">
        <div className="text-wrapper-24">Patient Requests</div>
        <div className="overlap-3-container">
          {loading ? (
            <div>Loading...</div>
          ) : patientRequests.length === 0 ? (
            <div>No patient requests found.</div>
          ) : (
            patientRequests.map((request, index) => (
              <div key={index} className="overlap-3">
                <div className="text-wrapper-11">
                  Blood Group : {request.bloodGroup}
                </div>
                <div className="text-wrapper-16">
                  Patient Name: {request.patientName}
                </div>
                <div className="text-wrapper-12">
                  Urgency level : {request.urgencyLevel}
                </div>
                <button className="rectangle" onClick={() => handleConfirmRequest(request)}>
                  <div className="text-wrapper-13">Confirm Request</div>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Request;
