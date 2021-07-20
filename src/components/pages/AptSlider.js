import React, { useState } from "react";
import "../../App.css";
import { AptSliderData } from "./AptSliderData";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

function AptSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const lenght = slides.lenght;

  return (
    <>
      <section className="slider">
        <FaAngleDoubleLeft className="left-arrow" onClick={prevSlide} />
        <FaAngleDoubleRight className="right-arrow" onClick={nextSlide} />
        {AptSliderData.map((slide, index) => {
          return <img src={slide.image} alt="Apartamento" />;
        })}
      </section>
    </>
  );
}

export default AptSlider;
