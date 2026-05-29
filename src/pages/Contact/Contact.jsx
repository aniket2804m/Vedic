import "./Contact.css";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function ContactUs() {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <h4>We’d Love To Hear From You</h4>
        <h1>CONTACT US</h1>
      </div>

      <div className="contact-container">
        <div className="contact-box">
          <div className="line"></div>
          <h2>Find Us Here</h2>
          <p>
            Nilaya by naiknavre, near star bazar, opposite to Old Mumbai,
            <br />
            Pune Highway, Talegaon Dabhade, Pune, Maharashtra 410507
          </p>

        </div>

        <div className="contact-box">
          <div className="line"></div>
          <h2>Get In Touch</h2>
          <p>+91 7057319333</p>
          <p>Jiivaastroacademy@gmail.com</p>
        </div>

        <div className="contact-box">
          <div className="line"></div>
          <h2>Working Hours</h2>
          <p>Mon- Fri: 10:30AM - 7:00PM</p>
          <p>Saturday: 10:30AM-5:30PM</p>
        </div>

         <div className="contact-box">
          <div className="line"></div>
          <h2>Social Media</h2>
          <p>Follow us on social media for the latest updates and news.</p>
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
        </div>

      </div>

      

      <div className="map-container">
        <iframe
          title="map"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.5732068796697!2d73.65157627394137!3d18.72791646281024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b1fedb217361%3A0x5d45ff41d82e1f13!2sJiivaastro%20Academy!5e0!3m2!1sen!2sin!4v1779901271002!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>

       
      </div>
    </section>
  );
}

export default ContactUs;
