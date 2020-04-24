import React from "react";
import front_cover from "../assets/front_cover.png";
import orange_cruz from "../assets/orange_cruz.png";
import "../index.css";

export default function TituloPrincipal() {
 return (
  <div className="background-cover">
   <h1 className="title">GUÍA DE PRIMEROS AUXILIOS PSICOLÓGICOS</h1>
   <h2 className="subtitle">Ayuda a otros cuando más lo necesitan</h2>
   <img className="front_cover" src={front_cover} alt="front_cover" />
   <img className="symbol_cruz" src={orange_cruz} alt="symbol_orange_cruz" />
   <p className="textbox">
    Basado en el protocolo A B C D E de Primeros Auxilios Psicológicos de la
    Universidad Católica de Chile en colaboración con el CIGIDEN.
   </p>
  </div>
 );
}
