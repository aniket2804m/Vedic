import React from "react";
import "./Footer.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT */}
        <div className="footer-col">
          <h4>Powered By</h4>
          <h2>Academy of Jiivaastro.</h2>

          <p>
            Regd. under Ministry of Corporate Affairs <br />
            Government of India
          </p>

          <div className="footer-contact">
            <p>
              <FaPhoneAlt /> +91 - 7400344849
            </p>
            <p>
              <FaEnvelope /> Jiivaastroacademy@gmail.com
            </p>
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
          {/* <div className="social-icons"> */}
          <div className="social-icons">
            <a
              href="https://www.instagram.com/jiivaastro_academy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/jiivaastrodotcom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com/jiivaastro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.youtube.com/channel/UCw8xLtLZe9KxFEWOYVsmJhQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>

            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
          {/* </div> */}
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        ©2026. Academy of Jiivaastro. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
