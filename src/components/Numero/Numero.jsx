// Numero.jsx

import React, { useRef, useState } from "react";
import "./Numero.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Numero = () => {

  const reportRef = useRef();

  const [showResult, setShowResult] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    system: "Chaldean Vedic/Classic",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Calculate
  const handleCalculate = () => {
    setShowResult(true);
  };

  // Reset
  const handleReset = () => {
    setFormData({
      name: "",
      dob: "",
      system: "Chaldean Vedic/Classic",
    });

    setShowResult(false);
  };

  // Share Function
  const handleShare = async () => {

    const shareData = {
      title: "Numerology Report",
      text: "Check my Numerology Report",
      url: window.location.href,
    };

    try {

      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        navigator.clipboard.writeText(window.location.href);
        alert("Link copied!");
      }

    } catch (error) {
      console.log(error);
    }
  };

  // Download PDF
  const downloadPDF = async () => {

    const element = reportRef.current;

    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 210;

    const pageHeight = 295;

    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;

    let position = 0;

    pdf.addImage(data, "PNG", 0, position, imgWidth, imgHeight);

    heightLeft -= pageHeight;

    while (heightLeft >= 0) {

      position = heightLeft - imgHeight;

      pdf.addPage();

      pdf.addImage(data, "PNG", 0, position, imgWidth, imgHeight);

      heightLeft -= pageHeight;
    }

    pdf.save("numerology-report.pdf");
  };

  return (
    <div className="numerology-page">

      {/* Main Container */}
      <div className="container" ref={reportRef}>

        <div className="top-header">

          <div>
            <h1>Numerology Calculator</h1>

            <p>
              Powered by Academy of Jiivaastro. Change details, then click
              Calculate to refresh your numerology report.
            </p>
          </div>

          <div className="action-buttons">

            <button onClick={handleShare}>
              Share
            </button>

            <button onClick={downloadPDF}>
              PDF
            </button>

          </div>
        </div>

        {/* Form Section */}

        <div className="card">
          <h3>Enter your details</h3>

          <div className="form-grid">

            <div>
              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Date of Birth</label>

              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Name Number System</label>

              <select
                name="system"
                value={formData.system}
                onChange={handleChange}
              >
                <option>Chaldean Jiivaastro/Classic</option>
                <option>Pythagorean</option>
              </select>
            </div>
          </div>

          <div className="switch-row">
            <span>Preserve Master Numbers (11, 22)</span>

            <div className="toggle"></div>
          </div>

          <div className="btn-row">

            <button
              className="primary-btn"
              onClick={handleCalculate}
            >
              Calculate
            </button>

            <button
              className="secondary-btn"
              onClick={handleReset}
            >
              Reset
            </button>

          </div>
        </div>

        {/* RESULT SECTION */}

        {showResult && (

          <div className="grid-layout">

            {/* Core Numbers */}
            <div className="card">
              <h3>Core Numerology Numbers</h3>

              <div className="number-grid">

                <div className="number-box">
                  <h2>1</h2>
                  <p>Radical / Birth Number</p>
                </div>

                <div className="number-box">
                  <h2>8</h2>
                  <p>Destiny / Life Path Number</p>
                </div>

                <div className="number-box">
                  <h2>2</h2>
                  <p>Name / Expression Number</p>
                </div>

              </div>
            </div>

            {/* Profile */}
            <div className="card">
              <h3>Your Numerology Profile</h3>

              <div className="profile-list">

                <div>
                  <span>Name</span>
                  <strong>{formData.name || "Your Name"}</strong>
                </div>

                <div>
                  <span>Date of Birth</span>
                  <strong>{formData.dob}</strong>
                </div>

                <div>
                  <span>Vowels (Soul Urge)</span>
                  <strong>2</strong>
                </div>

                <div>
                  <span>Consonants (Personality)</span>
                  <strong>9</strong>
                </div>

                <div>
                  <span>Maturity Number</span>
                  <strong>3</strong>
                </div>

                <div>
                  <span>Personal Year</span>
                  <strong>3</strong>
                </div>

              </div>
            </div>

            {/* Insights */}
            <div className="card full-width">
              <h3>Favourable Numerology Insights</h3>

              <div className="insight-list">

                <div>
                  <span>Favourable Sign(s)</span>
                  <strong>Aries, Leo</strong>
                </div>

                <div>
                  <span>Favourable Alphabets</span>
                  <strong>A, J, S</strong>
                </div>

                <div>
                  <span>Gemstone</span>
                  <strong>Ruby (Manik)</strong>
                </div>

                <div>
                  <span>Favourable Number(s)</span>
                  <strong>1, 4, 7</strong>
                </div>

                <div>
                  <span>Auspicious Colour(s)</span>
                  <strong>Red, Gold</strong>
                </div>

              </div>
            </div>

          </div>
        )}

      </div>

       {/* Content */}
        <div className="content-section">
          <h2>Free Numerology Calculator for Name and Date of Birth</h2>

          <p>
            This numerology calculator helps you discover key numerology
            numbers using your full name and date of birth.
          </p>

          <h3>What This Numerology Calculator Can Calculate</h3>

          <ul>
            <li>Birth Number or Radical Number</li>
            <li>Life Path Number</li>
            <li>Name Number</li>
            <li>Soul Urge Number</li>
            <li>Personality Number</li>
            <li>Maturity Number</li>
          </ul>

          <h3>How to Use This Numerology Calculator</h3>

          <ol>
            <li>Enter your full name.</li>
            <li>Select your date of birth.</li>
            <li>Choose numerology system.</li>
            <li>Click calculate button.</li>
          </ol>

          <h3>Numerology Calculator FAQs</h3>

          <div className="faq-box">
            <h4>What is a numerology calculator?</h4>
            <p>
              A numerology calculator is an online tool that calculates
              important numerology numbers.
            </p>
          </div>

          <div className="faq-box">
            <h4>Is this numerology calculator free?</h4>
            <p>Yes, this numerology calculator is free to use.</p>
          </div>
        </div>
      </div>

    
  );
};

export default Numero;