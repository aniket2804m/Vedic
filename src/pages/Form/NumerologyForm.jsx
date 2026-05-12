import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./AstroForm.css";

const AstroForm = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="form-container">
      {/* LEFT SIDE */}
      <div className="left-content">
        <div className="heading1">
          <h1>Most Trusted</h1>
          <h1 className="color-head">Vedic Numerology Course</h1>
        </div>
        <h3 style={{ fontWeight: "lighter", fontSize: "20px" }}>
          Become a Professional Numerologist
        </h3>

        <p>
          Our Vedic Numerology course is designed to guide you in exploring the
          deeper meanings and powerful vibrations hidden within numbers.
          Numerology offers profound insights into your destiny, personality,
          strengths, challenges, and overall life path. For thousands of years,
          this sacred science has been practiced across many cultures as a
          trusted tool for self-discovery, guidance, and spiritual
          understanding.
        </p>

        <p>
          By learning numerology, you open the door to a vast world of mystical
          and spiritual wisdom that helps you understand why certain patterns
          repeat in your life and how numbers influence your thoughts,
          decisions, and experiences. This knowledge empowers you to gain
          clarity, make conscious choices, and move forward with confidence and
          purpose.
        </p>

        <p>
          This online Vedic Numerology course is rooted in ancient wisdom and is
          carefully structured to help you understand even the most complex
          aspects of numerology in a simple and practical way. You will learn
          how to calculate and interpret key numerological elements such as your
          Name Number, Destiny Number, Psychic Number and many other important
          indicators.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-content">
        <div className="form-box">
          <h2>Get the Course Details</h2>

          <form>
            <div className="row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>

            <div className="row">
              <input type="email" placeholder="Email" />
            </div>

            <div className="phone">
              <PhoneInput
                country={"in"} // default India
                value={phone}
                onChange={(phone) => setPhone(phone)}
                inputStyle={{
                  width: "100%",
                  height: "45px",
                }}
                buttonStyle={{
                  border: "none",
                }}
              />
            </div>

            <select>
              <option>-Select Course-</option>
              <option>Tarot</option>
              <option>Vedic Astrology</option>
              <option>Vedic Numerology</option>
              <option>Vastu</option>
              <option>Akashic records</option>
              <option>Tarot Card Reading</option>
              <option>Chakra Healing</option>
              <option>Palmistry</option>
              <option>Crystal Healing</option>
              <option>Law of Attraction</option>
              <option>Reiki Healing</option>
              <option>Acupressure</option>
              <option>Face Reading</option>
              <option>Kp Astrology</option>
              <option>Lo Shu Numerology</option>
              <option>Lal Kitab</option>
              <option>Emotional Freedom Techhniques</option>
              <option>Nakshatra Jyotish</option>
              <option>Vedic Mastery</option>
              <option>Vedic Residency</option>
            </select>

            <div className="row">
              <input type="text" placeholder="Your City" />
              <input type="text" placeholder="Your Country" />
            </div>

            <p className="terms">
              By submitting this form, you acknowledge and agree to our{" "}
              <a href="/terms" target="_blank" rel="noopener noreferrer">
                Terms and Conditions
              </a>
              , and you consent to receiving promotional calls and SMS messages
              on the number provided, which may be sent through a third-party
              platform.
            </p>

            <button className="submit-btn" type="submit">
              Get Course Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AstroForm;
