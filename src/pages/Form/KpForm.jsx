import React from 'react'
import { useState } from 'react';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./AstroForm.css";

const KpForm = () => {
     const [phone, setPhone] = useState("");

  return (
    <div className="form-container">
            {/* LEFT SIDE */}
            <div className="left-content">
              <div className="heading1">
                <h1>Most Trusted</h1>
                <h1 className="color-head">KP Astrology Course</h1>
              </div>
              <h3 style={{ fontWeight: "lighter", fontSize: "20px" }}>
                Become a Professional Kp Astrologer
              </h3>
    
              <p>
               Our KP Astrology course offers a comprehensive and practical approach to understanding and mastering the Krishnamurti Paddhati (KP) of astrology. Designed for both beginners and advanced learners, the course covers the fundamentals of KP Astrology, including its unique house system, cuspal interlinks, and ruling planets. Through a combination of theoretical lessons and practical applications, students will learn to make precise predictions and gain deep insights into various aspects of life.
              </p>
    
              <p>
                Join us to unlock the secrets of the stars and enhance your astrological skills with expert guidance and hands-on experience. With a focus on accuracy, simplicity, and structured learning, this program empowers students to confidently interpret charts and deliver reliable predictions. Whether you aim to pursue astrology professionally or deepen your personal understanding, this training provides the right balance of theory and practice. It stands out as the best KP astrology course in india for learners who are serious about mastering KP Astrology with clarity and precision.
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
                    , and you consent to receiving promotional calls and SMS
                    messages on the number provided, which may be sent through a
                    third-party platform.
                  </p>
    
                  <button className="submit-btn" type="submit">
                    Get Course Details
                  </button>
                </form>
              </div>
            </div>
          </div>
  )
}

export default KpForm
