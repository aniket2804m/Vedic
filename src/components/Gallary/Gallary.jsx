import React, { useEffect, useState } from "react";
import "./Gallery.css";
import API from "../../config/api";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const res = await API.get("/gallery");
      setGalleryItems(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Our Gallery</h2>

      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <div
            key={item._id}
            className="gallery-card"
            onClick={() => setSelectedItem(item)}
          >
            {item.mediaType === "image" ? (
              <img
                src={item.mediaUrl}
                alt="Gallery"
              />
            ) : (
              <video muted>
                <source
                  src={item.mediaUrl}
                  type="video/mp4"
                />
              </video>
            )}
          </div>
        ))}
      </div>

      {selectedItem && (
        <div
          className="modal"
          onClick={() => setSelectedItem(null)}
        >
          <span className="close-btn">&times;</span>

          {selectedItem.mediaType === "image" ? (
            <img
              className="modal-content"
              src={selectedItem.mediaUrl}
              alt="Preview"
            />
          ) : (
            <video
              className="modal-content"
              controls
              autoPlay
            >
              <source
                src={selectedItem.mediaUrl}
                type="video/mp4"
              />
            </video>
          )}
        </div>
      )}
    </section>
  );
};

export default Gallery;