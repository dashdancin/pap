import img_cover from "../assets/img_cover.jpg";
import orange_cruz from "../assets/orange_cruz.png";

export default function Cover() {
 return (
  <div className="background-cover">
   <h1 className="title">
    GUÍA DE FORMACIÓN BÁSICA EN PRIMEROS AUXILIOS PSICOLÓGICOS
   </h1>
   <h2 className="subtitle">Para asistir a otros cuando más lo necesitan</h2>
   <figure className="figure-cover">
    <img className="img_cover" src={img_cover} alt="imagen de bienestar" />
   </figure>
   <section className="footer-container">
    <span className="textbox">
     <p>
      Basado en el Protocolo A B C D E para Primeros Auxilios Psicológicos de la
      Universidad Católica de Chile
     </p>
    </span>
    <div className="img-container">
     <img className="symbol_cruz" src={orange_cruz} alt="symbol_orange_cruz" />
    </div>
   </section>
  </div>
 );
}
