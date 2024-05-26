import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Menu from "../components/menu";
import "../styles/confirm.css";
import { db } from "../firebase/firebase"; 
import { ref, get, push, remove } from 'firebase/database';

const Confirm = () => {
  const location = useLocation();
  const { hospitalName } = location.state || {};
  console.log("Hospital Name in Confirm component:", hospitalName);

  const [donorRequests, setDonorRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(ref(db, 'accreq'));
        const data = snapshot.val();
        console.log("Data fetched from accreq node:", data);
        if (data) {
          const filteredRequests = Object.entries(data).filter(
            ([key, request]) => {
              console.log(`Request hospitalName: ${request.hospitalName}, Provided hospitalName: ${hospitalName}`);
              return request.hospitalName === hospitalName;
            }
          );
          setDonorRequests(filteredRequests);
          console.log("Filtered requests:", filteredRequests);
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

  const handleConfirmRequest = async ([requestKey, request]) => {
    try {
      const { hospitalName, ...requestData } = request; 
      await push(ref(db, 'confirm'), { ...requestData, hospitalName }); 
      console.log("Request confirmed and added to confirm:", { ...requestData, hospitalName });
      const donorRef = ref(db, `accreq/${requestKey}`);
      await remove(donorRef);

      setDonorRequests(prevRequests => prevRequests.filter(([key]) => key !== requestKey));
      alert("Donation confirmed!");
    } catch (error) {
      console.error("Error confirming donation:", error);
    }
  };

  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    return date.toLocaleString(undefined, options);
  };

  const handleDelete = async (requestKey) => {
    try {
     
      const donorRef = ref(db, `accreq/${requestKey}`);
      await remove(donorRef);

      setDonorRequests(prevRequests => prevRequests.filter(([key]) => key !== requestKey));
      alert("Donation deleted!");
    } catch (error) {
      console.error("Error deleting donation:", error);
    }
  };

  return (
    <div className="conf">
      <Menu hospitalName={hospitalName} />
      <div className="overlap-2">
        <div className="text-wrapper-24">Donor Confirmation</div>
        <div className="overlap-3-container">
          {loading ? (
            <div>Loading...</div>
          ) : donorRequests.length === 0 ? (
            <div>No donor requests found.</div>
          ) : (
            donorRequests.map(([key, request], index) => (
              <div key={key} className="overlap-3">
                <div className="left-details">
                  <div className="text-wrapper-11">
                    Blood Group : {request.bloodGroup}
                  </div>
                  <div className="text-wrapper-11">
                    Donor Name: {request.donorName}
                  </div>
                  <div className="text-wrapper-11">
                    Patient Name: {request.patientName}
                  </div>
                </div>
                <div className="right-details">
                  <div className="text-wrapper-11">
                    Donation Time: {formatDateTime(request.donationDateTime)}
                  </div>
                  <div className="text-wrapper-11">
                    Urgency level: {request.urgencyLevel}
                  </div>
                </div>
                <button className="rectangle" onClick={() => handleConfirmRequest([key, request])}>
                  <div className="text-wrapper-13">Confirm</div>
                </button>
                <button className="delete-button" onClick={() => handleDelete(key)}>X</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Confirm;
