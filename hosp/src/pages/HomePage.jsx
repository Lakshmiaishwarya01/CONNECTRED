import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap">
            <p className="p">
              Find a donor in the modern way using
            </p>
            <div className="connectred-wrapper">
              <p className="connectred">connectred</p>
              <p className="hospital">.hospital</p>
            </div>
        </div>
        <div className="overlap-group">
          <p className="connectred-2">connectred</p>
          <p className="join-our-digital">
            “Join our digital community today and embark on a journey of impact, where the click of a button transforms
            into a lifeline for<br />those in need.Together, let's create a world where compassion knows no bounds, and
            every donor becomes a hero."
          </p>
        </div>
        <div className="overlap-group-2">
          <Link to="/login">
            <button className="rectangle">
              <div className="login">Login</div>
            </button>
          </Link>
        </div>
        <div className="overlap-2">
          <Link to="/signup">
            <button className="rectangle-2">
              <div className="signup">Sign Up</div>
            </button>
          </Link>
        </div>
        <div className="overlap-3">
          <p className="connectred">connectred</p>
          <div className="hospital">.hospital</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
