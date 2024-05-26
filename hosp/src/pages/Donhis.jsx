import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Menu from "../components/menu";
import "../styles/confirm.css";
import { db } from "../firebase/firebase";
import { ref, get} from 'firebase/database';

const DonHis = () => {
  const location = useLocation();
  const { hospitalName } = location.state || {};
  const [confirmedDonations, setConfirmedDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Hospital Name in DonationHistory component:", hospitalName);

    const fetchConfirmedDonations = async () => {
      try {
        console.log("Fetching confirmed donations...");
        const snapshot = await get(ref(db, 'confirm'));
        const confirmData = snapshot.val();

        if (confirmData) {
          console.log("Confirm data fetched:", confirmData);
          const confirmedDonationsData = Object.entries(confirmData).filter(donation => donation[1].hospitalName === hospitalName);
          console.log("Confirmed donations filtered by hospital name:", confirmedDonationsData);
          setConfirmedDonations(confirmedDonationsData);
        } else {
          console.log("No confirmed donations found.");
        }
      } catch (error) {
        console.error("Error fetching confirmed donations:", error);
      } finally {
        setLoading(false);
      }
    };

    if (hospitalName) {
      fetchConfirmedDonations();
    }
  }, [hospitalName]);

  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    return date.toLocaleString(undefined, options);
  };

  return (
    <div className="conf">
      <Menu />
      <div className="overlap-2">
        <div className="text-wrapper-24">Donation History</div>
        <div className="overlap-3-container">
          {loading ? (
            <div>Loading...</div>
          ) : confirmedDonations.length === 0 ? (
            <div>No donation history found.</div>
          ) : (
            confirmedDonations.map(([key, donation], index) => (
              <div key={key} className="overlap-3">
                <div className="left-details">
                  <div className="text-wrapper-11">Blood Group: {donation.bloodGroup}</div>
                  <div className="text-wrapper-11">Donor Name: {donation.donorName}</div>
                  <div className="text-wrapper-11">Patient Name: {donation.patientName}</div>
                </div>
                <div className="right-details">
                  <div className="text-wrapper-11">Donation Time: {formatDateTime(donation.donationDateTime)}</div>
                  <div className="text-wrapper-11">Urgency level: {donation.urgencyLevel}</div>
                </div>
               
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DonHis;
