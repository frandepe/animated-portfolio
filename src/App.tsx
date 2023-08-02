import Proyectos from "./sections/Proyectos";
import { TrabajoActual } from "./sections/TrabajoActual";
import { Presentation } from "./sections/Presentation";
import { Habilidades } from "./sections/Habilidades";
import { RobotPresentation } from "./sections/RobotPresentation";
import { Transicion } from "./sections/Transicion";
import { Home } from "./sections/Home";
import { GlobalStyle } from "./styles/GlobalStyle";
// import { RobotModel } from "./sections/RobotModel";
import { Contacto } from "./sections/Contacto";

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
      {/* <RobotModel /> */}
      <RobotPresentation />
      <Presentation />
      <Habilidades />
      <Transicion />
      <Proyectos />
      <TrabajoActual />
      <Contacto />
    </>
  );
}

export default App;
