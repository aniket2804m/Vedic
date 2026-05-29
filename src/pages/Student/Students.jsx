import React, { useEffect, useState } from "react";
import "./Student.css";

const Student = () => {

  const videos = [
    "https://www.youtube.com/watch?v=4Ef_NCKcBZg",
    "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    "https://www.youtube.com/watch?v=ScMzIvxBSi4",
    "https://youtu.be/kuqtgiVBK8M?si=8fKO79j6W2qi_5YE",
    "https://www.youtube.com/watch?v=tgbNymZ7vqY",
  ];

  // Convert URL → Video ID
  const getVideoId = (url) => {
  const regExp =
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&?/]+)/;

  const match = url.match(regExp);

  return match ? match[1] : "";
};

  const [current, setCurrent] = useState(0);

  // Auto Scroll
  useEffect(() => {
    const interval = setInterval(() => {

      setCurrent((prev) =>
        prev >= videos.length - 3 ? 0 : prev + 1
      );

    }, 3000);

    return () => clearInterval(interval);

  }, [videos.length]);

  return (
    <section className="student-section">

      <div className="student-header">
        <h2 className="student-title">
          What Our <span>Students Say</span>
        </h2>
      </div>

      {/* Slider */}
      <div className="slider-wrapper">

        <div
          className="slider"
          style={{
            transform: `translateX(-${current * 33.33}%)`,
          }}
        >

          {videos.map((video, index) => (

            <div className="slide" key={index}>

              <div className="video-card">

                <iframe
                  src={`https://www.youtube.com/embed/${getVideoId(video)}?rel=0`}
                  title={`video-${index}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Student;