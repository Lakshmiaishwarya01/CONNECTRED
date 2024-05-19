import React from "react";
import "../styles/confirm.css";
import Menu from '../components/menu.jsx';

const Confirm = () => {
  return (
    <div className="conf">
      <div className="div">
        <Menu />
        <div className="overlap-2">
          <div className="text-wrapper-24">Donor Confirmation</div>
          <div className="overlap-3">
            <div className="overlap-group-2">
              <div className="text-wrapper-11">Blood Group : AB+</div>
              <div className="text-wrapper-11">Mr : Allen</div>
              <div className="text-wrapper-11">Patient name : Benny</div>
            </div>
            <button className="rectangle">
              <div className="text-wrapper-13">Confirm</div>
            </button>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-group-2">
              <div className="text-wrapper-11">Blood Group : A+</div>
              <div className="text-wrapper-11">Mr : Akshay</div>
              <div className="text-wrapper-11">Patient name : Ajal</div>
            </div>
            <button className="rectangle">
                <div className="text-wrapper-13">Confirm</div>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
