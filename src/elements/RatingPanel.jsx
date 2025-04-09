import React, { useState, useEffect } from 'react';
import './RatingPanel.css';

const ratings = [
  {
    platform: 'LeetCode',
    logo: 'src/assets/icons/leetcode.png',
    username: 'your_username',
    rating: '1850 (Knight)',
  },
  {
    platform: 'Codeforces',
    logo: 'src/assets/icons/cf.jpg',
    username: 'your_cf_handle',
    rating: '1450 (Specialist)',
  },
  {
    platform: 'GeeksforGeeks',
    logo: 'src/assets/icons/gfg.png',
    username: 'your_gfg_id',
    rating: '4.9★ | 150+ problems',
  },
];

const RatingCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(true);
  const total = ratings.length;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total);
      setAnimate(true);
    }, 100);
  };

  const prevSlide = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + total) % total);
      setAnimate(true);
    }, 100);
  };

  const goToSlide = (index) => {
    setAnimate(false);
    setTimeout(() => {
      setCurrent(index);
      setAnimate(true);
    }, 100);
  };

  return (
    <div className="carousel-container">
      <button className="nav-button" onClick={prevSlide}>
        ←
      </button>

      <div className="carousel-viewport">
        <div
          className={`carousel-track ${animate ? 'animate-slide' : ''}`}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {ratings.map((item, idx) => (
            <div className="carousel-card" key={idx}>
              <img
                src={item.logo}
                alt={item.platform}
                className="platform-logo"
              />
              <div className="rating-info">
                <h3>{item.platform}</h3>
                <p>
                  <strong>User:</strong> {item.username}
                </p>
                <p>
                  <strong>Rating:</strong> {item.rating}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="dot-container">
          {ratings.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === current ? 'active' : ''}`}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </div>

      <button className="nav-button" onClick={nextSlide}>
        →
      </button>
    </div>
  );
};

export default RatingCarousel;
