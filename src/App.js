import "./App.css";
import Cover from "./components/Cover";
import ConceptDefinition from "./components/ConceptDefinition";

function App() {
 return (
  <>
   <div className="fragment">
    <div className="cover">
     <Cover />
    </div>
    <div className="concept">
     <ConceptDefinition />
    </div>
   </div>
  </>
 );
}

export default App;
