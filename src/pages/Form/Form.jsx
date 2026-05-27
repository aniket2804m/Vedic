import React from "react";
import { useState } from "react";
import "./Form.css";
import img from "../../assets/map.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Form = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="form-container">
      {/* LEFT SIDE */}
      <div className="left-content">
        <h1>
          Take Your Next Step Towards <span>Jiivaastro</span>
        </h1>

        <img src={img} alt="vedic" />
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
              <option>Jiivaastro Astrology</option>
              <option>Jiivaastro Numerology</option>
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
              <option>Jiivaastro Mastery</option>
              <option>Jiivaastro Residency</option>
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

export default React.memo(Form);
