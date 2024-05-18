import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../styles/menu.css";
import { useAuth } from "../contexts/authContexts";

const Menu = () => {
    const { hospitalName } = useAuth();
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path, { state: { hospitalName } });
    };

    return (
        <div className="menu">
            <div className="overlap-group">
                <p className="connectred">connectred</p>
                <div className="Navbar">
                    <div className="overlap" onClick={() => handleNavigation("/requirement")}>
                        <div className="req">Post a requirement +</div>
                    </div>
                    <div className="line-1"><hr /></div>
                    <Link to="/donhis" className="hist">Donation History</Link>
                    <div className="line-2"><hr /></div>
                    <div className="pat" onClick={() => handleNavigation("/request")}>Patient Requests</div>
                    <div className="line-3"><hr /></div>
                    <Link to="/confirm" className="don">Donor Confirmation</Link>
                    <div className="line-4"><hr /></div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
