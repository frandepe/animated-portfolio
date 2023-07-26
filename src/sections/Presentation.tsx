import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { Dialog } from "../components/Dialog/Dialog";
import { PresentationInfo } from "../components/PresentationInfo/PresentationInfo";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  background-color: var(--grey);
  overflow: hidden;
`;

const ContainerInfo = styled.div`
  z-index: 999;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Presentation = () => {
  const container = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top-=400 top",
          end: "bottom top",
          scrub: true,
        },
      })
      .fromTo(dialogRef.current, { opacity: 0 }, { opacity: 2, duration: 2 });

    return () => {
      if (tl) tl.kill();
    };
  }, []);

  return (
    <Section ref={container}>
      <div ref={dialogRef}>
        <Dialog
          color="var(--dark)"
          top="15%"
          left="25%"
          text="He preparado esta guía para que conozcas un poco más acerca de mi creador"
          rotateTransform="rotate(20deg)"
        />
      </div>
      <ContainerInfo>
        <PresentationInfo />
      </ContainerInfo>
    </Section>
  );
};
