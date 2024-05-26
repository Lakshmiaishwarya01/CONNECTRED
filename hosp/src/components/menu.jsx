import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import "../styles/menu.css";
import { useAuth } from "../contexts/authContexts";

const Menu = () => {
    const { hospitalName } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleNavigation = (path) => {
        setActiveLink(path);
        navigate(path, { state: { hospitalName } });
    };

    return (
        <div className="menu">
            <div className="overlap-group">
            <div className="connectred-wrapper">
              <p className="connectred">connectred</p>
              <p className="hospital">.hospital</p>
            </div>
                <div className="Navbar">
                    <div className={`overlap ${activeLink === "/requirement" ? "active" : ""}`} onClick={() => handleNavigation("/requirement")}>
                        <div className="req">Post a requirement +</div>
                    </div>
                    <div className="line-1"><hr /></div>
                    <div className={`hist ${activeLink === "/donhis" ? "active" : ""}`} onClick={() => handleNavigation("/donhis")}>Donation History</div>
                    <div className="line-2"><hr /></div>
                    <div className={`pat ${activeLink === "/request" ? "active" : ""}`} onClick={() => handleNavigation("/request")}>Patient Requests</div>
                    <div className="line-3"><hr /></div>
                    <div className={`don ${activeLink === "/confirm" ? "active" : ""}`} onClick={() => handleNavigation("/confirm")}>Donor Confirmation</div>
                    <div className="line-4"><hr /></div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
