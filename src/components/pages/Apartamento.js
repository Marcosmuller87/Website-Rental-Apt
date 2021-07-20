import React from "react";
import AptSlider from "./AptSlider";
import { AptSliderData } from "./AptSliderData";

const Apartamento = () => {
  return (
    <>
      <AptSlider slides={AptSliderData} />
    </>
  );
};

export default Apartamento;
