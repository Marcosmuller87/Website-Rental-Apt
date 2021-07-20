import React from "react";
import "../../App.css";
import "./Serviços.css";

function Serviços() {
  return (
    <div className="serviços-container">
      <div className="serviços-wrapper">
        <h2 className="serviços-title">Serviços do Edifico</h2>
        <ul className="serviços-list">
          <li className="serviços-item">Elevador</li>
          <li className="serviços-item">Uma vaga de garagem cuberto</li>
          <li className="serviços-item">
            Entrada Principal y entrada de banhista
          </li>
          <li className="serviços-item">Torneira para lavar os pes</li>
          <li className="serviços-item">
            Carrinho de compras para subir malas
          </li>
        </ul>
      </div>
      <div className="serviços-wrapper">
        <h2 className="serviços-title">Serviços do Apartamento</h2>
        <ul className="serviços-list">
          <li className="serviços-item">Um cuarto de casal con TV</li>
          <li className="serviços-item">Um cuarto com duas beliches</li>
          <li className="serviços-item">TV grande na sala</li>
          <li className="serviços-item">Cocina completa</li>
          <li className="serviços-item">Misteira</li>
          <li className="serviços-item">Liquidificador</li>
        </ul>
      </div>
      <div className="serviços-wrapper">
        <h2 className="serviços-title">Regras do Edificio</h2>
        <ul className="serviços-list">
          <li className="serviços-item">
            Uso de mascara obligatorio en areas comuns
          </li>
          <li className="serviços-item">Horario de silenço as 22:00</li>
        </ul>
      </div>
    </div>
  );
}

export default Serviços;
