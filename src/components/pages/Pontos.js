import React from "react";
import "../../App.css";
import "../Cards.css";
import PontosItem from "./PontosItem";

function Pontos() {
  return (
    <div className="cards">
      <h1>Pontos Turisticos</h1>
      <div className="pontos-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <PontosItem
              src="/images/guarapari/praiadomorro.jpg"
              text="Distancia do Apartamento: 200 mts"
              label="Praia do Morro"
              path={
                "https://www.google.com/maps/place/Praia+do+Morro,+Guarapari+-+ES/@-20.648094,-40.5008532,14z/data=!3m1!4b1!4m5!3m4!1s0xb8576f4027a693:0x6ce252c25a4d3a6d!8m2!3d-20.6480702!4d-40.483454"
              }
            />
            <PontosItem
              src="/images/guarapari/tres-praias.jpg"
              text="Distancia do Apartamento: 3,2 Km"
              label="Tres Praias"
            />
            <PontosItem
              src="/images/guarapari/guarapari-centro.jpg"
              text="Distancia do Apartamento: 3,8 Km"
              label="Centro"
            />
          </ul>
          <ul className="cards-items">
            <PontosItem
              src="/images/guarapari/praia-das-castanheiras.jpg"
              text="Distancia do Apartamento: 4,2 Km"
              label="Praia Das Castanheiras"
            />
            <PontosItem
              src="/images/guarapari/setiba.jpg"
              text="Distancia do Apartamento: 9,1 Km"
              label="Praia de Setiba"
            />
          </ul>
          <ul className="cards-items">
            <PontosItem
              src="/images/guarapari/cachoeira-buenos-aires.jpg"
              text="Distancia do Apartamento: 15,6 Km"
              label="Cachoeira - Buenos Aires"
            />
            <PontosItem
              src="/images/guarapari/shopping.jpg"
              text="Distancia do Apartamento: 37,9 Km"
              label="Boulevard Shopping - Vila Velha"
            />
            <PontosItem
              src="/images/guarapari/vitoria.jpeg"
              text="Distancia do Apartamento: 49 Km"
              label="Vitoria - ES"
            />
          </ul>
          <ul className="cards-items">
            <PontosItem
              src="/images/guarapari/matilde.jpg"
              text="Distancia do Apartamento: 51,5 Km"
              label="Matilde - Alfredo Chavez"
            />
            <PontosItem
              src="/images/guarapari/aeroporto.jpg"
              text="Distancia do Apartamento: 59,2 Km"
              label="Aeroporto VIX"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pontos;
