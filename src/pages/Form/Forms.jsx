import React from "react";
import { useState } from "react";
import "./Form.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import API from "../../config/api";
import { useNavigate } from "react-router-dom";
// import "./AstroForm.css";

const Forms = () => {
  const navigate = useNavigate();

   // Form data state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    city: "",
    country: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/enquiries", formData);

      if (res.ok) {
        alert("Form Submitted Successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-container">
      
       <div className="right-content">
        <div className="form-box">
          <h2>Get the Course Details</h2>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="row">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="phone">
              <PhoneInput
                country={"in"}
                value={formData.phone}
                onChange={(phone) =>
                  setFormData((prev) => ({
                    ...prev,
                    phone,
                  }))
                }
              />
            </div>

            <select name="course" onChange={handleChange}>
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
              <input
                type="text"
                placeholder="Your City"
                name="city"
                onChange={handleChange}
              />
              <input
                type="text"
                name="country"
                placeholder="Your Country"
                onChange={handleChange}
              />
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

            <button className="submit-btn" type="submit" onClick={() => navigate("/thank-you")}>
              Get Course Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Forms);
