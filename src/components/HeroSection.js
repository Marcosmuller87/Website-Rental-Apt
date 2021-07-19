import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/beach.mp4" autoPlay loop muted />
      <h1>APARTAMENTO DA SOLI</h1>
      <h2>
        O que vocês achariam de se hospedarem na Praia do Morro a só duas
        quadras do mar? Estamos aguardando voces!!!
      </h2>
    </div>
  );
}

export default HeroSection;
