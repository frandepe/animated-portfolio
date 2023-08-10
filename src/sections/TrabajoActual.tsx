import gsap from "gsap";
import { styled } from "styled-components";
import v1 from "../assets/video/videoNatura2.mp4";
import v2 from "../assets/video/videoNatura.mp4";
import { useLayoutEffect, useRef } from "react";

const Section = styled.section`
  width: 100vw;
  min-height: 80vh;
  position: relative;
  z-index: 2;
  background-color: var(--white);
  overflow: hidden;
  @media screen and (max-width: 30em) {
    min-height: 92vh;
  }
`;

const V1 = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: bottom;
  z-index: 2;
`;

const V2 = styled.video`
  position: absolute;
  top: 0;
  right: 40%;
  width: 60%;
  height: 1auto;

  z-index: 1;

  @media screen and (max-width: 30em) {
    width: 100%;
    right: 0;
    top: 10%;
  }
`;

const TitleContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;

  & > *:nth-child(2) {
    margin-left: 6rem;
  }
  & > *:nth-child(3) {
    margin-left: 12rem;
  }

  @media screen and (max-width: 48em) {
    top: 60%;
    right: 2rem;
  }
  @media screen and (max-width: 40em) {
    right: 5rem;
  }
  @media screen and (max-width: 30em) {
    top: 70%;
    right: 32%;
  }
`;

const Title = styled.h1`
  font-size: var(--fontBig);
  z-index: 5;
  text-transform: capitalize;

  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontxxl);
  }
`;

export const TrabajoActual = () => {
  const sectionRef = useRef(null);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const titleRef = useRef(null);

  let elements = gsap.utils.selector(titleRef);

  useLayoutEffect(() => {
    const Elem = sectionRef.current;
    const video1Elem = videoRef1.current;
    const video2Elem = videoRef2.current;
    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: `bottom+=500 bottom`,
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: Elem,
          start: "top top",
          end: `bottom+=500 bottom`,
          scrub: true,
        },
      })
      .to(video1Elem, { scale: 0.3 }, "key1")
      .to(video2Elem, { scale: 0.6 }, "key1");

    elements("h1").forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            // markers: true,
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 100,
          opacity: 1,
        }
      )
    );

    return () => {};
  }, []);
  return (
    <Section ref={sectionRef}>
      <V1 ref={videoRef1} src={v1} typeof="video/mp4" autoPlay muted loop />
      <V2 ref={videoRef2} src={v2} typeof="video/mp4" autoPlay muted loop />
      <TitleContainer>
        <Title>Actualmente</Title>
        <Title>Trabajando</Title>
        <Title>En natura</Title>
        <div>
          <p>https://www.natura.com.mx</p>
          <p>https://www.natura.com.pe</p>
          <p>https://www.natura.com.co</p>
          <p>https://www.natura.cl</p>
        </div>
      </TitleContainer>
    </Section>
  );
};
