import React, { useState } from "react";
import { AptSliderData } from "./AptSliderData";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const AptSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const Arrlenght = slides.length;

  const nextSlide = () => {
    setCurrent(current === Arrlenght - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? Arrlenght - 1 : current - 1);
  };
  if (!Array.isArray(slides) || Arrlenght <= 0) {
    return null;
  }
  console.log(slides);
  return (
    <section className="slider">
      <FaAngleDoubleLeft className="left-arrow" onClick={prevSlide} />
      <FaAngleDoubleRight className="right-arrow" onClick={nextSlide} />
      {AptSliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide-active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="Apartamento" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default AptSlider;
