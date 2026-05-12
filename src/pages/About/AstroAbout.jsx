import React from 'react';
import "./AstroAbout.css";

const AstroAbout = () => {
  return (
    <div className="about-container">
        <h2>About Our Jiivaastro Course</h2>

        <p>
          Our professional Jiivaastro course is designed for those seeking
          to gain a deep and practical understanding of traditional astrology.
          This course focuses on horoscope interpretation, planetary influences,
          Dashas (planetary periods), and predictive techniques. Experienced
          mentors provide guidance through live online sessions. Through a
          structured curriculum and the analysis of real-life horoscopes,
          students learn to confidently apply astrological principles in both
          their personal learning and professional development. Our Vedic
          Astrology course is suitable for both beginners and those wishing to
          strengthen their existing knowledge through systematic, authentic
          Vedic learning.
        </p>

        {/* BADGES */}
        <div className="about-badges">
          <div className="badge left">100% Placement Assistance</div>
          <div className="badge right">Flexible Learning</div>
        </div>
      </div>
  )
}

export default AstroAbout
