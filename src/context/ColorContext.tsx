import { useState } from "react";
import { createContext } from "react";
import { useGLTF } from "@react-three/drei";

export const ColorContext = createContext({});

export const ColorContextProvider = ({ children }: any) => {
  const { materials }: any = useGLTF("/scene.gltf");
  const [currentColor, setCurrentColor] = useState({
    color: "#9BB5CE",
    text: "Sierra Blue",
    rgbColor: "155, 181, 206",
  });

  let changeColorContext = (colorObj: any) => {
    if (materials && materials.Body) {
      materials.Body.color.set(colorObj.color);
    }
    setCurrentColor(colorObj);
  };

  return (
    <ColorContext.Provider value={{ currentColor, changeColorContext }}>
      {children}
    </ColorContext.Provider>
  );
};
