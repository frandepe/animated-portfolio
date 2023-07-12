import { ColorContextProvider } from "./context/ColorContext";
import BatterySection from "./sections/BatterySection";
import { CameraSection } from "./sections/CameraSection";
// import { ColorSection } from "./sections/ColorSection";
import { Presentation } from "./sections/Presentation";
import { Habilidades } from "./sections/Habilidades";
import { RobotPresentation } from "./sections/RobotPresentation";
import { ProcessorSection } from "./sections/ProcessorSection";
import { Home } from "./sections/Home";
import { GlobalStyle } from "./styles/GlobalStyle";
import { RobotModel } from "./sections/RobotModel";

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
      <RobotModel />
      <RobotPresentation />
      <Presentation />
      <Habilidades />
      <ProcessorSection />
      <BatterySection />
      <ColorContextProvider>
        {/* <ColorSection /> */}
        <CameraSection />
      </ColorContextProvider>
    </>
  );
}

export default App;
