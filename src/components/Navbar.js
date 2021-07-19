import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMbMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMbMenu}>
            <i className="fas fa-umbrella-beach" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMbMenu}>
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/apartamento"
                className="nav-links"
                onClick={closeMbMenu}
              >
                Apartamento
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pontos" className="nav-links" onClick={closeMbMenu}>
                Pontos Turisticos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/serviços" className="nav-links" onClick={closeMbMenu}>
                Serviços
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
