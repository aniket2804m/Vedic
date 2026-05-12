import { useRef, useEffect  } from "react";
import "./Review.css";

import { review } from "../../data/kp";

const Review = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const width = scrollRef.current.offsetWidth;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  useEffect(() => {
  const interval = setInterval(() => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth;

    // 
    if (
      container.scrollLeft + container.offsetWidth >=
      container.scrollWidth - 10
    ) {
      container.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, 4000);

  return () => clearInterval(interval);
}, []);

  return (
    <div className="review-section">
      <h2>
        KP Astrology Course <span>Reviews</span>
      </h2>

      {/* ARROWS */}
      <button className="arrow left" onClick={() => scroll("left")}>
        ❮
      </button>

      <div className="review-container" ref={scrollRef}>
        {review.map((r, i) => (
          <div className="review-card" key={i}>
            <div className="quote">❝</div>

            <p>{r.text}</p>

            <div className="stars">★★★★★</div>

            <div className="user">
              <img src={r.img} alt={r.name} />
              <h4>{r.name}</h4>
            </div>
          </div>
        ))}
      </div>

      <button className="arrow right" onClick={() => scroll("right")}>
        ❯
      </button>
    </div>
  );
};

export default Review;