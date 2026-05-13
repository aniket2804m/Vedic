import React, { useState, useEffect } from "react";
import "./Certificate.css";
import img1 from "../../assets/map.png";

const countries = ["India", "Nepal", "USA", "UK", "Canada"];

const Certificate = () => {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % countries.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="certificate-container">

      {/* TITLE */}
      <div className="certificate-top">
        <h2>
          Globally Recognized <span>Certificate</span>
        </h2>
      </div>

      {/* ✅ ROW 1 (TEXT LEFT - IMAGE RIGHT) */}
      <div className="certificate-row">

        <div className="certificate-text">
          <h2>Become a Certified Practitioner Today!</h2>

          <ul>
            <li>100% Live Online Training.</li>
            <li>10+ years experienced trainers.</li>
            <li>Q&A and doubt clearing sessions.</li>
            <li>Case study based learning.</li>
            <li>No prior experience required.</li>
            <li>Globally recognized certification.</li>
          </ul>

          <button className="register-btn">Register Now ➢</button>
        </div>

        <div className="certificate-image">
          <img src={img1} alt="certificate" />
        </div>

      </div>

      {/* ✅ ROW 2 (IMAGE LEFT - TEXT RIGHT) */}
      <div className="certificate-row">

        <div className="certificate-image1">
          <img src={img1} alt="map" />
        </div>

        <div className="certificate-text1">
          <h2>Our Courses Are Popular in</h2>

          <div className="country-slider">
            <span key={index} className="country-name">
              {countries[index]}
            </span>
          </div>

          <p>
            Our course is trusted by learners in 50+ countries, offering a world-class 
            education tailored to a global audience.
          </p>
        </div>

      </div>

      <div className="certificate-bottom">

         <div className="certificate-top">
        <h2>
          Globally Recognized <span>Certificate</span>
        </h2>
      </div>

        <div className="certificate-text">
          <h2>Recognized by the Government of India (DPIIT)</h2>

          <p>We are proud to share that SkillEnable Edutech Private Limited, the parent company of Academy of Jiivaastro, has been officially recognized as a startup by the Government of India under the Department for Promotion of Industry and Internal Trade (DPIIT). This recognition highlights our commitment to innovation and excellence in the Education Technology sector, empowering individuals with knowledge and skills to thrive in the modern world.</p>
        </div>

        <div className="certificate-image1">
          <img src={img1} alt="map" />
        </div>

      </div>

    </div>
  );
};

export default Certificate;