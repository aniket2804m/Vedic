import React from "react";
import "./AstroAbout.css";

const NakshatraAbout = () => {
  return (
    <div className="about-container">
      <h2>Nakshatra Astrology Curriculum</h2>

      <p>
        Are you seeking clarity, life direction, and a deeper understanding of
        your cosmic design? Step into the illuminating world of Nakshatra
        Astrology an ancient Vedic wisdom system that reveals how the 27 lunar
        constellations shape your personality, destiny, and life path. Our
        Nakshatra Astrology program is thoughtfully designed to help you decode
        the subtle influences of each Nakshatra, understand their connection to
        planetary energies, and interpret their impact on relationships, career,
        health, and spiritual growth. You’ll learn how to read and apply
        Nakshatra insights to make accurate predictions, uncover hidden
        potentials, and align your life decisions with cosmic timing. With
        expert guidance and hands-on chart analysis, you’ll discover how the
        stars and lunar mansions influence every chapter of your journey. This
        is not just astrology, it’s a path to self-awareness, destiny alignment,
        and wise living guided by the celestial map.
      </p>

      {/* BADGES */}
      <div className="about-badges">
        <div className="badge left">100% Placement Assistance</div>
        <div className="badge right">Flexible Learning</div>
      </div>
    </div>
  );
};

export default React.memo(NakshatraAbout);
