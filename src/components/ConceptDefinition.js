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
     Las crisis emocionales pueden ser detonadas por eventos como los desastres
     naturales, accidentes graves, pérdida del empleo, la pérdida de seres
     queridos, o los eventos de salud; como la pandemia que hemos padecido
     recientemente, etc.
     <br />
     <br />
     La crisis emocional que viven los afectados puede incluir un estado
     temporal de agitación, pensamiento caótico o desorganización y puede ir
     acompañado de un sentimiento de estar desbordados o sobrepasados a la hora
     de afrontar una situación o problema.
     <br />
     <br />
     El abanico de respuestas de los afectados ante la crisis se produce en
     distintas formas dependiendo del contexto y en diversos niveles dependiendo
     de sus “herramientas” emocionales y formas de afrontar las adversidades.
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
