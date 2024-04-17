import React from "react";
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="logo">
        <img src="./top-car-logo.png" alt="logo" />
        <p>Top Car</p>
      </div>
      <div className="informacao">
        <p>Sobre nos</p>
        <p>Trabalhe conosco</p>
        <p>Central de ajuda</p>
      </div>
      <div className="redes-sociais">
        <img src="./whatsapp.png" alt="whatsapp" />
        <img src="./instagram.png" alt="instagram" />
        <img src="./linkedin.png" alt="linkedin" />
      </div>
    </footer>
  );
}