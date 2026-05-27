import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./AstroForm.css";

const Nakshatra = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="form-container">
      {/* LEFT SIDE */}
      <div className="left-content">
        <div className="heading1">
          <h1>Most Trusted</h1>
          <h1 className="color-head">Nakshatra Astrology Course</h1>
        </div>

        <p>
          Designed for both beginners and advanced learners, this course
          provides a solid foundation in Nakshatra Jyotish while also exploring
          advanced techniques for in-depth chart interpretation, predictive
          accuracy, and spiritual insight. Students will gain a deep
          understanding of the 27 Nakshatras, their ruling planets, deities, and
          symbolic energies — and how these celestial forces influence
          personality, relationships, career paths, health, and life events.
        </p>

        <p>
          Throughout the program, you’ll learn how to identify key Nakshatra
          placements in a birth chart, interpret planetary interactions within
          them, and apply this knowledge to precise forecasting. The course
          combines in-depth theoretical lessons with practical chart analysis,
          ensuring you not only understand Nakshatra Jyotish intellectually but
          also gain the skill to apply it with confidence in real-life readings.
        </p>

        <p>
          You will also explore how Nakshatra Jyotish complements other branches
          of Vedic Astrology, and how it can be integrated into professional
          astrology consultations or personal self-discovery practices. Whether
          you aim to deepen your spiritual understanding, enhance your
          predictive skills, or begin a career as a Nakshatra Jyotish
          practitioner, this course is designed to meet you where you are and
          guide you to mastery.
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

export default React.memo(Nakshatra);
