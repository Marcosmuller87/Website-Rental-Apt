import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-adress">
        <h4>Praia do Morro, Guarapari-ES</h4>
      </div>
      <section className="footer-contact">
        <div className="footer-contact-wrap">
          <div className="footer-phone">
            <i class="fas fa-phone"></i> (27)997040048
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
