// NameNumerology.jsx

import React from "react";
import "./NameNumerology.css";

const NameNumerology = () => {
  return (
    <div className="nameNumerology">

      {/* HERO SECTION */}

      <section className="hero-section">
        <h3>India's Leading Jiivaastro Science Academy</h3>

        <h1>
          NAME NUMEROLOGY <span>CALCULATOR</span>
        </h1>
      </section>

      {/* WHAT IS SECTION */}

      <section className="info-section">

        <div className="info-left">
          <h2>
            What is a <span>Name Numerology Calculator?</span>
          </h2>

          <p>
            Using the name numerology calculator to get hidden information
            can benefit your business, personal life, family relationships,
            career, and other aspects.
          </p>

          <p>
            The sole system has nine planets. The digit 1 to 9 are connected
            to these nine planets in numerology and astrology.
          </p>
        </div>

        <div className="info-card">

          <h3>New Phone Number Calculator</h3>

          <p>
            Enter your name, email, birth date, and phone number
            to check if it’s lucky for you!
          </p>

          <input type="text" placeholder="Enter your name" />

          <input type="email" placeholder="Enter your email" />

          <div className="dob-grid">
            <input type="text" placeholder="DD" />
            <input type="text" placeholder="MM" />
            <input type="text" placeholder="YYYY" />
          </div>

          <input
            type="text"
            placeholder="Enter your phone number"
          />

          <button>Check</button>

        </div>

      </section>

      {/* TYPES */}

      <section className="types-section">

        <h2>
          Types Of Number in <span>Name Numerology</span>
        </h2>

        <div className="types-grid">

          <div className="type-card">
            <h3>Name Number</h3>
          </div>

          <div className="type-card">
            <h3>Destiny Number</h3>
          </div>

          <div className="type-card">
            <h3>Psychic Number</h3>
          </div>

        </div>

      </section>

      {/* CALCULATE NAME NUMBER */}

      <section className="calculator-section">

        <h2>
          Calculate <span>Name Number</span>
        </h2>

        <div className="calculator-grid">

          <div className="image-box">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2920/2920222.png"
              alt="calculator"
            />
          </div>

          <div className="calculator-card">

            <h3>Name Number Calculator</h3>

            <p>
              Enter your full name to calculate your Name Number.
            </p>

            <label>Full Name:</label>

            <input type="text" />

            <button>Calculate</button>

          </div>

        </div>

        <p className="description">
          The Name Number in numerology assigns values to letters
          in your name, unveiling personality traits and life influences.
        </p>

      </section>

      {/* TABLE */}

      <section className="table-section">

        <table>

          <thead>
            <tr>
              <th>Numbers</th>
              <th>Alphabets</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>A, I, J, Q, Y</td>
            </tr>

            <tr>
              <td>2</td>
              <td>B, K, R</td>
            </tr>

            <tr>
              <td>3</td>
              <td>C, G, L, S</td>
            </tr>

            <tr>
              <td>4</td>
              <td>D, M, T</td>
            </tr>

            <tr>
              <td>5</td>
              <td>E, H, N, X</td>
            </tr>

            <tr>
              <td>6</td>
              <td>U, V, W</td>
            </tr>

            <tr>
              <td>7</td>
              <td>O, Z</td>
            </tr>

            <tr>
              <td>8</td>
              <td>F, P</td>
            </tr>
          </tbody>

        </table>

      </section>

      {/* HOW TO CALCULATE */}

      <section className="how-section">

        <h2>
          How to calculate <span>Name Number ?</span>
        </h2>

        <div className="formula-box">

          <h1>SAKSHI OBEROI</h1>

          <p>3+1+2+3+5+1 + 7+2+5+2+7+1</p>

          <h2>1+2 = 3</h2>

        </div>

      </section>

      {/* DESTINY NUMBER */}

      <section className="calculator-section">

        <h2>
          Calculate <span>Destiny Number</span>
        </h2>

        <div className="calculator-grid">

          <div className="image-box">
            <img
              src="https://cdn-icons-png.flaticon.com/512/10337/10337609.png"
              alt="destiny"
            />
          </div>

          <div className="calculator-card">

            <h3>Destiny Number Calculator</h3>

            <p>
              Enter your Date of Birth to calculate your Destiny Number.
            </p>

            <label>Date of Birth:</label>

            <input type="date" />

            <button>Calculate</button>

          </div>

        </div>

      </section>

      {/* PSYCHIC NUMBER */}

      <section className="calculator-section">

        <h2>
          Calculate <span>Psychic Number</span>
        </h2>

        <div className="calculator-grid">

          <div className="image-box">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2245/2245548.png"
              alt="psychic"
            />
          </div>

          <div className="calculator-card">

            <h3>Psychic Number Calculator</h3>

            <p>
              Enter your birthdate to calculate your Psychic Number.
            </p>

            <label>Enter Your Birthdate:</label>

            <input type="date" />

            <button>Calculate</button>

          </div>

        </div>

      </section>

      {/* BUTTONS */}

      <section className="bottom-buttons">

        <button className="purple-btn">
          Learn Vedic Numerology
        </button>

        <button className="pink-btn">
          View All Courses
        </button>

      </section>

    </div>
  );
};

export default NameNumerology;