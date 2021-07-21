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
              path="https://www.google.com/maps/place/Praia+do+Morro,+Microrregi%C3%B3n+de+Guarapari+-+Esp%C3%ADrito+Santo,+Brasil/@-20.648094,-40.5008532,14z/data=!3m1!4b1!4m5!3m4!1s0xb8576f4027a693:0x6ce252c25a4d3a6d!8m2!3d-20.6480702!4d-40.483454"
            />
            <PontosItem
              src="/images/guarapari/tres-praias.jpg"
              text="Distancia do Apartamento: 3,2 Km"
              label="Tres Praias"
              path="https://www.google.com/maps/place/Tr%C3%AAs+Praias/@-20.6348514,-40.4721218,17z/data=!3m1!4b1!4m5!3m4!1s0xb859c2b7d459c3:0x6670ca75fdbbd27!8m2!3d-20.6348514!4d-40.4699277"
            />
            <PontosItem
              src="/images/guarapari/guarapari-centro.jpg"
              text="Distancia do Apartamento: 3,8 Km"
              label="Centro"
              path="https://www.google.com/maps/place/Centro,+Microrregi%C3%B3n+de+Guarapari+-+Esp%C3%ADrito+Santo,+Brasil/@-20.6711714,-40.501245,16z/data=!3m1!4b1!4m5!3m4!1s0xb857bc72bb38e1:0xe7763f5410475d97!8m2!3d-20.6689669!4d-40.4961776"
            />
          </ul>
          <ul className="cards-items">
            <PontosItem
              src="/images/guarapari/praia-das-castanheiras.jpg"
              text="Distancia do Apartamento: 4,2 Km"
              label="Praia Das Castanheiras"
              path="https://www.google.com/maps/place/Castanheiras+Beach/@-20.6731242,-40.4990268,17z/data=!3m1!4b1!4m5!3m4!1s0xb857beaec6271b:0x37c3f6d6a33badb0!8m2!3d-20.6738645!4d-40.4975293"
            />
            <PontosItem
              src="/images/guarapari/setiba.jpg"
              text="Distancia do Apartamento: 9,1 Km"
              label="Praia de Setiba"
              path="https://www.google.com/maps/place/Setiba,+Microrregi%C3%B3n+de+Guarapari+-+Esp%C3%ADrito+Santo,+29222-510,+Brasil/@-20.6331963,-40.4580451,14z/data=!3m1!4b1!4m5!3m4!1s0xb85a286ca9e147:0xd00a8607cd54ae92!8m2!3d-20.6331975!4d-40.4404925"
            />
          </ul>
          <ul className="cards-items">
            <PontosItem
              src="/images/guarapari/cachoeira-buenos-aires.jpg"
              text="Distancia do Apartamento: 15,6 Km"
              label="Cachoeira - Buenos Aires"
              path="https://www.google.com/maps/place/Cachoeira+de+Buenos+Aires/@-20.5876445,-40.5581518,17z/data=!3m1!4b1!4m5!3m4!1s0xb853e3d2d3c65d:0x1c5ba7241e466fbd!8m2!3d-20.5876445!4d-40.5559577"
            />
            <PontosItem
              src="/images/guarapari/shopping.jpg"
              text="Distancia do Apartamento: 37,9 Km"
              label="Boulevard Shopping - Vila Velha"
              path="https://www.google.com/maps/place/Boulevard+Shopping+Vila+Velha/@-20.3925611,-40.3202572,17z/data=!3m1!4b1!4m5!3m4!1s0xb83e2d6ff39e89:0x43d1cc0966217d69!8m2!3d-20.3925611!4d-40.3180631"
            />
            <PontosItem
              src="/images/guarapari/vitoria.jpeg"
              text="Distancia do Apartamento: 49 Km"
              label="Vitoria - ES"
              path="https://www.google.com/maps/place/Vit%C3%B3ria,+Esp%C3%ADrito+Santo,+Brasil/@-20.2821776,-40.3559173,12z/data=!3m1!4b1!4m5!3m4!1s0xb83d5d85374ee9:0x97595e7ea70ed809!8m2!3d-20.3196644!4d-40.3384748"
            />
          </ul>
          <ul className="cards-items">
            <PontosItem
              src="/images/guarapari/matilde.jpg"
              text="Distancia do Apartamento: 51,5 Km"
              label="Matilde - Alfredo Chavez"
              path="https://www.google.com/maps/place/Matilde,+Alfredo+Chaves+-+Esp%C3%ADrito+Santo,+29240-000,+Brasil/@-20.5556892,-40.8177053,17z/data=!3m1!4b1!4m5!3m4!1s0xb9a638239c6883:0x3e5443ecbe2c33f3!8m2!3d-20.5556728!4d-40.81558"
            />
            <PontosItem
              src="/images/guarapari/aeroporto.jpg"
              text="Distancia do Apartamento: 59,2 Km"
              label="Aeroporto VIX"
              path="https://www.google.com/maps/place/Aeroporto,+Vit%C3%B3ria+-+Esp%C3%ADrito+Santo,+Brasil/@-20.2578232,-40.3010819,14z/data=!3m1!4b1!4m5!3m4!1s0xb8184396b0d063:0x3d4923961a30c5e9!8m2!3d-20.2616507!4d-40.2833315"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pontos;
