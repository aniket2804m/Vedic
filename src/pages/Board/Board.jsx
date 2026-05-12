import React from "react";
import "./Board.css";

import { data } from "../../data/board";

const Board = () => {
  return (
    <div className="features">

       <div className="bubbles">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>

      <div className="features-container">
        {data.map((item, index) => (
          <div className="feature-card" key={index}>
            <img src={item.icon} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;