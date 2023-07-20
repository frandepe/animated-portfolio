import { styled } from "styled-components";

const Section = styled.div`
  width: 100vw;
  height: 50vh;
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  color: var(--white);
  overflow: hidden;
`;

export const Transicion = () => {
  return <Section></Section>;
};
