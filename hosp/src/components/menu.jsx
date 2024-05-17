import React from "react";
import { Link } from "react-router-dom";
import "../styles/menu.css";

const Menu = ({ hospitalName }) => {
  return (
    <div className="menu">
      <div className="overlap-group">
        <p className="connectred">connectred</p>
        <div className="Navbar">
        <Link to={{ pathname: "/requirement", state: { hospitalName } }} className="overlap">
            <div className="req">Post a requirement +</div>
          </Link>
          <div className="line-1"><hr /></div>
          <Link to="/donhis" className="hist">Donation History</Link>
          <div className="line-2"><hr /></div>
          <Link to={{ pathname: "/request", state: hospitalName }} className="pat">Patient Requests</Link>
          <div className="line-3"><hr /></div>
          <Link to="/confirm" className="don">Donor Confirmation</Link>
          <div className="line-4"><hr /></div>
        </div>
      </div>
    </div>
  );
};

export default Menu;