import React from "react";
import { Link } from "react-router-dom";
import "./ThankYou.css";

const ThankYou = () => {
  return (
    <div className="thankyou-container">
      <div className="thankyou-card">
        <h1>🎉 Thank You!</h1>
        <p>
          Your enquiry has been submitted successfully.
          Our team will contact you shortly.
        </p>

        <Link to="/" className="home-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;