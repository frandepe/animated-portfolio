import { gsap } from "gsap";
import styled from "styled-components";
import backgroundVideo from "../assets/video/video1.mp4";
import { Dialog } from "../components/Dialog/Dialog";
import { useLayoutEffect, useRef } from "react";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  background-color: var(--dark);
  overflow: hidden;
`;

const ContainerDialog = styled.div``;

const TextContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-image: linear-gradient(45deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 1;

  span {
    font-size: var(--fontxxxl);
    text-transform: uppercase;
    font-weight: 600;
    padding: 2rem;
  }
`;

const VideoContainer = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: bottom;
  }
`;

export const RobotPresentation = () => {
  const container = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top-=550 top",
          end: "bottom top",
          scrub: true,
        },
      })
      .fromTo(dialogRef.current, { opacity: 0 }, { opacity: 2, duration: 1 });

    return () => {
      if (tl) tl.kill();
    };
  }, []);

  return (
    <Section ref={container}>
      <VideoContainer>
        <video src={backgroundVideo} typeof="video/mp4" autoPlay muted loop />
      </VideoContainer>
      <ContainerDialog ref={dialogRef}>
        <Dialog
          top="10%"
          left="25%"
          text="Hola, mi nombre es CreateX, déjame ser tu guía en esta aventura!"
          rotateTransform="rotate(-20deg)"
        />
      </ContainerDialog>
      <TextContainer>
        <span>desarrollo</span>
        <span>frontend</span>
      </TextContainer>
    </Section>
  );
};
