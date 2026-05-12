import React from 'react'
import "./AstroAdmission.css";

import { card } from "../../data/Austro";

const AstroAdmission = () => {
  return (
    <div className="admission">
            <div className="heading">
              <h1>
                Admission <span>Procedure</span>
              </h1>
            </div>
    
            <div className="course-grid">
              {card.map((item, index) => (
                <div className="card-admission" key={index}>
                  <h2>{item.step}</h2>
    
                  <div className="imgs">
                    <img src={item.image} alt={item.title} />
                  </div>
    
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
  )
}

export default AstroAdmission
