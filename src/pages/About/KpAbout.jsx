import React from "react";
import "./AstroAbout.css";

const KpAbout = () => {
  return (
    <div className="about-container">
      <h2>KP Astrology Course Curriculum</h2>

      <p>
        Are you seeking a profound understanding of your life’s purpose? Ever
        wondered about the precise influences of your birth chart through the
        lens of KP Astrology? Join our KP Astrology course, specially designed
        to equip you with the knowledge to make you understand deeper meaning
        into of your life’s path using the Krishnamurti Paddhati Astrology.
        Discover the essentials of KP Astrology and the significance behind your
        unique astrological elements. Learn how this advanced astrological
        technique can empower your decision-making and enrich your life. Learn
        the intricate connection between celestial bodies and humans, interpret
        birth charts with precision, unveil personality traits, forecast life
        patterns, foster self-awareness, and learn how to comprehend
        interpersonal dynamics through KP Astrology. Our experienced instructors
        will navigate you through the intricate realm of KP Astrology,
        unraveling the transformative power of your celestial blueprint. Join us
        on this voyage of self-exploration and unlock the captivating world of
        KP Astrology.
      </p>

      {/* BADGES */}
      <div className="about-badges">
        <div className="badge left">100% Placement Assistance</div>
        <div className="badge right">Flexible Learning</div>
      </div>
    </div>
  );
};

export default React.memo(KpAbout);
