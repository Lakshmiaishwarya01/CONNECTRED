import React from "react";
import "../styles/Donhis.css";
import Menu from '../components/menu.jsx';

const Donhis = () => {
  return (
    <div className="history">
      <div className="overlap-wrapper">
        <Menu />
        <div className="his">
          <div className="group-2">
            <div className="overlap-5">
              <p className="text-wrapper-15">Date / Time : 11 -03-24 / 11:21</p>
              <div className="text-wrapper-23">Blood Group : AB+</div>
              <div className="text-wrapper-24">Mr : Allen</div>
              <div className="text-wrapper-25">Patient name : Benny</div>
            </div>
          </div>
          <div className="group-3">
            <div className="overlap-2">
              <p className="text-wrapper-15">Date / Time : 11 -03-24 / 11:21</p>
              <div className="text-wrapper-23">Blood Group : A+</div>
              <div className="text-wrapper-26">Mr : Akshay</div>
              <div className="text-wrapper-27">Patient name : Ajal</div>
            </div>
          </div>
          <div className="text-wrapper-28">Donation History</div>
        </div>
      </div>
    </div>
  );
};

export default Donhis;
