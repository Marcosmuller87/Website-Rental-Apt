import React from "react";

const PontosItem = (props) => {
  return (
    <>
      {/* Para esta seccion se reutilizaron las clases utilizadas en CadItem */}
      <li className="cards-item">
        {/* Con path se redirecciona a la localizacion en google maps */}
        <a
          className="cards-item-link"
          href={props.path}
          target="_blank"
          rel="noreferrer"
        >
          <figure className="cards-item-wrap" data-category={props.label}>
            <img src={props.src} alt="Images" className="cards-item-img" />
          </figure>
          <div>
            <h5 className="cards-item-text">{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
};

export default PontosItem;
