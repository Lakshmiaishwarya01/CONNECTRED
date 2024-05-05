import React from "react";
import { Link } from "react-router-dom";
import "../styles/menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <div className="overlap-group">
          <p className="connectred">connectred</p>
        <div className="Navbar">
        <Link to="/requirement" className="overlap">
  <div className="req">Post a requirement +</div>
</Link>
        <div className="line-1"><hr/></div> 
        <Link to="/donhis" className="hist">Donation History</Link>
        <div className="line-2"><hr/></div> 
        <Link to="/request" className="pat">Patient Requests</Link>
        <div className="line-3"><hr/></div> 
        <Link to="/confirm" className="don">Donor Confirmation</Link>
        <div className="line-4"><hr/></div> 
       
      </div>
      </div>
    </div>
  );
};

export default Menu;
