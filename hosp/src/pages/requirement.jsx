import React from "react";
import "../styles/requirement.css";

export const Requirement = () => {
  return (
    <div className="his">
      <div className="div">
        <div className="overlap-group">
          <img className="line" alt="Line" src="line-2.svg" />
          <div className="text-wrapper">Donation History</div>
          <img className="img" alt="Line" src="line-3.svg" />
          <div className="text-wrapper-2">Patient Requests</div>
          <img className="line-2" alt="Line" src="line-4.svg" />
          <div className="text-wrapper-3">Donor Confirmation</div>
          <div className="group">
            <p className="connectred">
              <span className="span">co</span>
              <span className="text-wrapper-4">nn</span>
              <span className="text-wrapper-5">ec</span>
              <span className="text-wrapper-6">tr</span>
              <span className="text-wrapper-7">ed</span>
            </p>
          </div>
          <div className="overlap">
            <div className="text-wrapper-8">Post a requirement</div>
            <div className="text-wrapper-9">+</div>
          </div>
          <img className="line-3" alt="Line" src="line-1.svg" />
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-10">Select urgency level</div>
          <div className="back-wrapper">
            <img className="back" alt="Back" src="back.png" />
          </div>
          <div className="text-wrapper-11">Select blood group</div>
          <div className="img-wrapper">
            <img className="back-2" alt="Back" src="image.png" />
          </div>
          <div className="text-wrapper-12">Post a requirement</div>
          <img className="line-4" alt="Line" src="line-5.svg" />
          <div className="text-wrapper-13">Enter patient name</div>
          <div className="rectangle" />
          <div className="div-wrapper">
            <div className="text-wrapper-14">Submit</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Requirement;
