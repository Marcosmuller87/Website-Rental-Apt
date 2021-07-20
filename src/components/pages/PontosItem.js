import React from "react";
import { Link } from "react-router-dom";

const PontosItem = (props) => {
  return (
    <>
      <li className="cards-item">
        <Link className="cards-item-link" to={props.path}>
          <figure className="cards-item-wrap" data-category={props.label}>
            <img src={props.src} alt="Images" className="cards-item-img" />
          </figure>
          <div>
            <h5 className="cards-item-text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
};

export default PontosItem;
