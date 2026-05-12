import React from "react";
import "./Footer.css";

import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-col">
          <h4>Powered By</h4>
          <h2>SkillEnable EduTech Pvt Ltd.</h2>

          <p>
            Regd. under Ministry of Corporate Affairs <br />
            Government of India
          </p>

          <div className="footer-contact">
            <p><FaPhoneAlt /> +91 - 7439041439</p>
            <p><FaEnvelope /> admin@academyofvedicvidya.com</p>
          </div>
        </div>

        {/* CENTER */}
        <div className="footer-col">
          <h4>Quick Links</h4>

          <ul>
            <li>
              Become an Instructor <span className="hiring">Hiring!</span>
            </li>
            <li>Privacy Policy</li>
            <li>Term of Use</li>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-col">
          <h4>Subscribe Now!</h4>

          <p>
            Rest assured, we do not send promotional emails. You will only 
            receive notifications when we have an ongoing offer on our courses.
          </p>

          {/* INPUT */}
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>

          {/* SOCIAL */}
          <div className="social-icons">
            <span><FaInstagram /></span>
            <span><FaFacebookF /></span>
            <span><FaXTwitter /></span>
            <span><FaYoutube /></span>
            <span><FaLinkedinIn /></span>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        ©2025. Academy of Vedic Vidya. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;