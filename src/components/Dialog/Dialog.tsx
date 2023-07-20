import { forwardRef } from "react";
import { keyframes, styled } from "styled-components";

interface Props {
  text: string;
  rotateTransform: string;
  top: string;
  left: string;
  color?: string;
}

export const Dialog = forwardRef<HTMLDivElement, Props>(
  ({ text, rotateTransform, top, left, color = "var(--white)" }, ref) => {
    const DialogText = styled.div`
      position: absolute;
      border-radius: 10px;
      padding: 10px;
      transform: ${rotateTransform};
      box-shadow: 0 8px 32px 0 var(--violetRgba);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      border: 1px solid rgba(255, 255, 255, 0.18);
      top: ${top};
      left: ${left};
      width: 25%;
      height: max-content;
      color: ${color};
      font-size: var(--fontmd);
      font-family: var(--fontRobot);

      &:before {
        border: 25px solid var(--violetRgba);
        content: "";
        border-left-color: transparent;
        border-bottom-color: transparent;
        border-right-color: transparent;
        position: absolute;
        bottom: -50px;
        left: calc(50% - 25px);
      }
    `;
    const teclear = keyframes`
from {
  clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%)
} to {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%)
}
`;

    const efecto = keyframes`
50% {
  border-color: transparent;
}
`;

    const Text = styled.span`
      text-align: center;
      border-right: 3px solid;
      padding-right: 5px;
      animation: ${teclear} 2.5s steps(35),
        ${efecto} 0.5s step-end infinite alternate;
    `;

    return (
      <DialogText ref={ref}>
        <Text>{text}</Text>
      </DialogText>
    );
  }
);
