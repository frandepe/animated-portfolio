import { useState } from "react";
import styled, { keyframes } from "styled-components";

interface ButtonData {
  id: number;
  buttonName: string;
  text: JSX.Element;
}

interface TextProps {
  delay: string;
}

const Container = styled.div`
  background: rgba(172, 174, 255, 0.15);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 13% 87% 35% 65% / 30% 34% 66% 70%;
  @media screen and (max-width: 1100px) {
    margin-bottom: 20px;
  }
`;

const TextContainer = styled.div``;
const TextContainer2 = styled.div``;
const TextContainer3 = styled.div``;

const ButtonContainer = styled.div``;
const TextReturn = styled.div`
  height: 250px;
`;

export const Button = styled.button`
  /*
  
  margin-top: 10px;
  margin-left: 5px;
  border: none;
  cursor: pointer; */
  font-size: var(--fontsm);
  color: var(--white);
  border: none;
  margin-top: 20px;
  margin-left: 5px;
  padding: 3px 10px 3px 10px;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  -webkit-transition: all 0.8s ease;
  transition: all 0.8s ease;
  overflow: hidden;
  &:before,
  &:after {
    position: absolute;
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    left: 100%;
    top: 1%;
  }
  &:after {
    left: -100%;
    -webkit-clip-path: polygon(10% 0, 70% 0, 90% 100%, 30% 100%);
    clip-path: polygon(10% 0, 70% 0, 90% 100%, 30% 100%);
    background-color: rgba(255, 255, 255, 0.6);
    -webkit-transition: all 300ms ease;
    transition: all 300ms ease;
  }
  &:hover::after {
    left: 100%;
    top: 1%;
  }
`;

const moveUp = keyframes`
  100% {
    transform: translateY(0);
  }
`;

const Text = styled.p<TextProps>`
  position: relative;
  width: 800px;
  height: 100%;
  font-size: var(--fontlg);
  height: var(--fontmd);
  overflow: hidden;

  span {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateY(3rem);
    animation-name: ${moveUp};
    animation-duration: 2.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-delay: ${(props) => props.delay};
    font-family: var(--fontL);
    background-image: linear-gradient(
      -45deg,
      #6064b3 0%,
      #0eabba 20%,
      #424242 76%,
      #000000 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (max-width: 1100px) {
    font-size: var(--fontmd);
    width: 100%;
  }
`;

const moveUp2 = keyframes`
  100% {
    transform: translateY(0);
  }
`;

const Text2 = styled.p<TextProps>`
  position: relative;
  width: 800px;
  height: 100%;
  font-size: var(--fontlg);
  height: var(--fontmd);
  overflow: hidden;

  span {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateY(3rem);
    animation-name: ${moveUp2};
    animation-duration: 2.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-delay: ${(props) => props.delay};
    font-family: var(--fontL);
    background-image: linear-gradient(
      -45deg,
      #6064b3 0%,
      #0eabba 20%,
      #424242 76%,
      #000000 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (max-width: 1100px) {
    font-size: var(--fontmd);
    width: 100%;
  }
`;

const moveUp3 = keyframes`
  100% {
    transform: translateY(0);
  }
`;

const Text3 = styled.p<TextProps>`
  position: relative;
  width: 800px;
  height: 100%;
  font-size: var(--fontlg);
  height: var(--fontmd);
  overflow: hidden;

  span {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateY(3rem);
    animation-name: ${moveUp3};
    animation-duration: 2.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-delay: ${(props) => props.delay};
    font-family: var(--fontL);
    background-image: linear-gradient(
      -45deg,
      #6064b3 0%,
      #0eabba 20%,
      #424242 76%,
      #000000 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (max-width: 1100px) {
    font-size: var(--fontmd);
    width: 100%;
  }
`;

export const PresentationInfo = () => {
  const buttonData: ButtonData[] = [
    {
      id: 1,
      buttonName: "Sobre mí",
      text: (
        <TextContainer>
          <Text delay="0s">
            <span>Hola! Soy programador. </span>
          </Text>
          <Text delay="0.4s">
            <span>Actualmente recido en la ciudad de La Plata.</span>
          </Text>
          <Text delay="0.8s">
            <span>Mis habilidades se concentran en el frontend,</span>
          </Text>
          <Text delay="1.2s">
            <span>aunque también tengo experiencia y conocimientos</span>
          </Text>
          <Text delay="1.6s">
            <span>prácticos en el desarrollo backend</span>
          </Text>
        </TextContainer>
      ),
    },
    {
      id: 2,
      buttonName: "Estudios",
      text: (
        <TextContainer2>
          <Text2 delay="0s">
            <span>Me formé en el mundo digital con NUCBA,</span>
          </Text2>
          <Text2 delay="0.4s">
            <span>en la carrera de programación fullstack.</span>
          </Text2>
          <Text2 delay="0.8s">
            <span>Concluí la aceleración de Alkemy</span>
          </Text2>
          <Text2 delay="1.2s">
            <span>y sigo formandome con cursos en Udemy.</span>
          </Text2>
        </TextContainer2>
      ),
    },
    {
      id: 3,
      buttonName: "Experiencia",
      text: (
        <TextContainer3>
          <Text3 delay="0s">
            <span>Trabajé 6 meses en una compañía</span>
          </Text3>
          <Text3 delay="0.4s">
            <span>con la tecnología de React Js.</span>
          </Text3>
          <Text3 delay="0.8s">
            <span>Actualmente trabajo desde Febrero de 2023</span>
          </Text3>
          <Text3 delay="1.2s">
            <span>como desarrollador Frontend en Natura.</span>
          </Text3>
        </TextContainer3>
      ),
    },
  ];

  const [displayText, setDisplayText] = useState(
    buttonData.find((button) => button.id === 1)?.text || null
  );
  const [colorSelected, setColorSelected] = useState(1);

  const handleButtonClick = (id: number) => {
    const selectedButton = buttonData.find((button) => button.id === id);
    console.log(selectedButton);

    if (selectedButton) {
      setColorSelected(selectedButton.id);
      setDisplayText(selectedButton.text);
    }
  };

  return (
    <Container>
      <TextReturn>{displayText}</TextReturn>
      <ButtonContainer>
        {buttonData.map((button) => (
          <Button
            key={button.id}
            onClick={() => handleButtonClick(button.id)}
            style={{
              backgroundColor:
                colorSelected === button.id ? "#05a1b9" : "var(--blue)",
            }}
          >
            {button.buttonName}
          </Button>
        ))}
      </ButtonContainer>
    </Container>
  );
};
