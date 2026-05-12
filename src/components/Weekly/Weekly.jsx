import React from "react";
import "./Weekly.css";
import img1 from "../../assets/vedic.png";
import img2 from "../../assets/vedic.png";
import img3 from "../../assets/vedic.png";
import img4 from "../../assets/vedic.png";

const courses = [
  {
    title: "ARIES (Mesh/मेष)",
    desc: "MAR 21 - APR 19",
    image: img1,
  },
  {
    title: "Taurus (Vrish/वॄष)",
    desc: "APR 20 - MAY 20",
    image: img2,
  },
  {
    title: "Gemini (Mithun/मिथुन)",
    desc: "MAY 21 - JUN 21.",
    image: img3,
  },
  {
    title: "Cancer (Karkata/कर्कट)",
    desc: "JUN 22 - JUL 22",
    image: img4,
  },
  {
    title: "Leo (Sinh/सिंह)",
    desc: "JUL 23 - AUG 22",
    image: img1,
  },
  {
    title: "Virgo (Kanya/कन्या)",
    desc: "AUG 23 - SEP 22",
    image: img2,
  },
  {
    title: "Libra (Tula/तुला)",
    desc: "SEP 23 - OCT 22",
    image: img3,
  },
  {
    title: "Scorpio (Vrishchika/वृषचिक)",
    desc: "OCT 23 - NOV 21",
    image: img4,
  },
  {
    title: "Sagittarius (Dhanus/धनुष)",
    desc: "NOV 22 - DEC 21",
    image: img1,
  },
  {
    title: "Capricorn (Makar/मकर)",
    desc: "DEC 22 - JAN 19",
    image: img2,
  },
  {
    title: "Aquarius (Kumbh/कुंभ)",
    desc: "JAN 20 - FEB 18",
    image: img1,
  },
  {
    title: "Pisces (Meen/मीन)",
    desc: "FEB 19 - MAR 20",
    image: img1,
  },

];

const Weekly = () => {
  return (
    <div className="course">
      {/* TOP */}
      <div className="course-top">
        <div className="heading">
          <h1 className="week1">India's Leading Jiivaastro Academy</h1>
          <h1 className="week">
            Weekly <span> Horoscope</span>
          </h1>
        </div>

      
      </div>

      {/* CARDS */}
      <div className="course-grid">
        {courses.map((item, index) => (
          <div className="course-card" key={index}>
            <div className="circle">
              <img src={item.image} alt={item.title} />
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <button className="learn-btn">Read More →</button>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default Weekly;
