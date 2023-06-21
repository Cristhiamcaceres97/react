import React, { useState } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [images, setImages] = useState([
    "/images-carousel/imagen1.jpg",
    "/images-carousel/imagen2.jpg",
    "/images-carousel/imagen3.jfif",
    "/images-carousel/imagen4.jpg",
    "/images-carousel/imagen5.jfif",
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="carousel-container">
      <button onClick={goToPrevious}> ◀️ </button>
      <img
        className="carousel-image"
        src={images[currentIndex]}
        alt="Carousel"
      />

      <button onClick={goToNext}> ▶️</button>
    </div>
  );
};

export default Carousel;
