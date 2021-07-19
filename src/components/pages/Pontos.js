import React from "react";
import "../../App.css";
import "./Pontos.css";

function Pontos() {
  return (
    <div className="route-container">
      <h1 className="route-title">Pontos turisticos</h1>
      <ol className="route-list">
        <div className="route-item li">
          <figure>
            <img
              src="public\images\guarapari\praiadomorro.jpg"
              alt="Praia do Morro"
            />
          </figure>
        </div>
        <div className="route-item li"></div>
        <div className="route-item li"></div>
        <div className="route-item li"></div>
        <div className="route-item li"></div>
        <div className="route-item li"></div>
        <div className="route-item li"></div>
        <div className="route-item li"></div>
      </ol>
    </div>
  );
}

export default Pontos;
