import regulation_emotional from "../assets/regulacion_emocional.png";
import emotional_crisis from "../assets/emotional_crisis.png";

const ConceptDefinition = () => {
 return (
  <div className="title-ConceptDefinition">
   <h2 className="">
    ¿Qué son los Primeros Auxilios Psicológicos o Primeros Auxilios Emocionales?
   </h2>
   <span className="">
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
   <img className="" src={regulation_emotional} alt="" />
   <h2 className="">
    ¿Qué son los Primeros Auxilios Psicológicos o Primeros Auxilios Emocionales?
   </h2>
   <span className="">
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
   <img className="" src={emotional_crisis} alt="" />
  </div>
 );
};

export default ConceptDefinition;
