import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <img
        src="../images/beach.jpg"
        alt="beach-img"
        className="background-img"
      />
      <h1>APARTAMENTO DA DONA SOLI</h1>
      <h2>
        O que vocês achariam de se hospedarem na Praia do Morro a só duas
        quadras do mar? Eu so a Dona Solidade e estou aguardando voces!!!
      </h2>
    </div>
  );
}

export default HeroSection;
