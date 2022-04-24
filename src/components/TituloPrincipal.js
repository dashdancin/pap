import React from "react";
import front_cover from "../assets/front_cover.png";
import "../index.css";

export default function TituloPrincipal() {
 return (
  <div className="background-cover">
   <h1 className="cover">GUÍA DE PRIMEROS AUXILIOS PSICOLÓGICOS</h1>
   <img className="front_cover" src={front_cover} alt="front_cover"></img>
  </div>
 );
}
