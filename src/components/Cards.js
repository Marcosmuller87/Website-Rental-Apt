import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>O apartamento ideal pra suas Ferias</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src="/images/depto/piezap1.jpeg"
              text="Apartamento con capacidade para 6 pessoas"
              label="Apartamento"
              path="/Apartamento"
            />
            <CardItem
              src="/images/guarapari/praiadomorro.jpg"
              text="Disfrute do que Guarapari tem para oferecer"
              label="Pontos Turisticos"
              path="/Pontos"
            />
            <CardItem
              src="/images/depto/entrada2.jpeg"
              text="Conheca os Serviços do apartamento, e do edificio"
              label="Serviços"
              path="/Serviços"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
