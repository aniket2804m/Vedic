import React, { useState } from "react";
import "./Gallery.css";

import photo1 from "../../assets/gallery/Photo1.jpeg";
import photo2 from "../../assets/gallery/Photo2.jpeg";
import photo3 from "../../assets/gallery/Photo3.jpeg";
import photo4 from "../../assets/gallery/Photo4.jpeg";
import photo5 from "../../assets/gallery/Photo5.jpeg";
import photo7 from "../../assets/gallery/Photo7.jpeg";
import photo8 from "../../assets/gallery/Photo8.jpeg";
import photo9 from "../../assets/gallery/Photo9.jpeg";
import photo10 from "../../assets/gallery/Photo10.jpeg";
import photo11 from "../../assets/gallery/Photo11.jpeg";
import photo12 from "../../assets/gallery/Photo12.jpeg";

import video1 from "../../assets/gallery/Photo6.mp4";

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const galleryItems = [
    { type: "image", src: photo1 },
    { type: "image", src: photo2 },
    { type: "image", src: photo3 },
    { type: "image", src: photo4 },
    { type: "image", src: photo5 },
    { type: "image", src: photo7 },
    { type: "image", src: photo8 },
    { type: "image", src: photo9 },
    { type: "image", src: photo10 },
    { type: "image", src: photo11 },
    { type: "image", src: photo12 },
    { type: "video", src: video1 },
  ];

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Our Gallery</h2>

      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div
            className="gallery-card"
            key={index}
            onClick={() => setSelectedItem(item)}
          >
            {item.type === "image" ? (
              <img src={item.src} alt={`Gallery ${index}`} />
            ) : (
              <video muted>
                <source src={item.src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="modal" onClick={() => setSelectedItem(null)}>
          <span className="close-btn">&times;</span>

          {selectedItem.type === "image" ? (
            <img
              className="modal-content"
              src={selectedItem.src}
              alt="Preview"
            />
          ) : (
            <video className="modal-content" controls autoPlay>
              <source src={selectedItem.src} type="video/mp4" />
            </video>
          )}
        </div>
      )}
    </section>
  );
};

export default Gallery;