import React from "react";
import img_cover from "../assets/img_cover.jpg";
import orange_cruz from "../assets/orange_cruz.png";
import "../index.css";

export default function TituloPrincipal() {
 return (
  <div className="background-cover">
   <h1 className="title">
    GUÍA DE FORMACIÓN BÁSICA PRIMEROS AUXILIOS PSICOLÓGICOS
   </h1>
   <h2 className="subtitle">Para asistir a otros cuando más lo necesitan</h2>
   <img className="img_cover" src={img_cover} alt="imagen de bienestar" />
   <section className="footer-container">
    <span className="textbox">
     <p>
      Basado en el protocolo A B C D E de Primeros Auxilios Psicológicos de la
      Universidad Católica de Chile
      <br /> <br />
     </p>
    </span>
    <div className="img-container">
     <img className="symbol_cruz" src={orange_cruz} alt="symbol_orange_cruz" />
    </div>
   </section>
  </div>
 );
}
