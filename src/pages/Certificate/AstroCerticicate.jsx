import React from 'react'
import "./AstroCerticicate.css";

import img1 from "../../assets/vedic.png";

const AstroCerticicate = () => {
  return (
     <div className="certificate-container">
            <div className="certificate-top">
              <h2>
                Globally Recognized <span>Certificate</span>
              </h2>
            </div>
    
            {/* ✅ ROW 1 (TEXT LEFT - IMAGE RIGHT) */}
            <div className="certificate-row">
              <div className="certificate-text">
                <h3>Become a Certified Practitioner Today!</h3>
    
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
          </div>
  )
}

export default AstroCerticicate
