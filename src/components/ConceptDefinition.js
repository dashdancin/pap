import regulation_emotional from "../assets/regulacion_emocional.png";
import emotional_crisis from "../assets/emotional_crisis.png";

const ConceptDefinition = () => {
 return (
  <div className="bg-CD">
   <h2 className="title-ConceptDefinition">
    ¿Qué son los Primeros Auxilios Psicológicos o Primeros Auxilios Emocionales?
   </h2>
   <span className="text-ConceptDefinition">
    <p>
     Los Primeros Auxilios Psicológicos están definidos como una técnica de
     apoyo a personas que sufren una crisis emocional y tiene como objetivo
     recuperar el equilibrio emocional y prevenir el desarrollo de secuelas
     psicológicas.
     <br />
     <br />
     Los Primeros Auxilios Psicológicos son un apoyo inmediato que se da a una
     persona que sufre, en donde se da acompañamiento, escucha y se ofrece
     movilización de recursos de apoyo.
    </p>
   </span>
   <img
    className="img1-ConceptDefinition"
    src={regulation_emotional}
    alt="abrazo de consolación"
   />
   <h2 className="title-ConceptDefinition">
    ¿Qué son los Primeros Auxilios Psicológicos o Primeros Auxilios Emocionales?
   </h2>
   <span className="subtext-ConceptDefinition">
    <p>
     Los Primeros Auxilios Psicológicos están definidos como una técnica de
     apoyo a personas que sufren una crisis emocional y tiene como objetivo
     recuperar el equilibrio emocional y prevenir el desarrollo de secuelas
     psicológicas.
     <br />
     Los Primeros Auxilios Psicológicos son un apoyo inmediato que se da a una
     persona que sufre, en donde se da acompañamiento, escucha y se ofrece
     movilización de recursos de apoyo.
    </p>
   </span>
   <img
    className="img2-ConceptDefinition"
    src={emotional_crisis}
    alt="crisis emocional y pensamientos negativos"
   />
  </div>
 );
};

export default ConceptDefinition;
