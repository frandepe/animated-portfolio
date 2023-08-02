// import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { styled } from "styled-components";
import { SiMui } from "react-icons/si";
import { DiCss3, DiReact, DiHtml5 } from "react-icons/di";
import {
  DiPython,
  DiDrupal,
  DiWordpress,
  DiSass,
  DiMysql,
} from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { BiLogoTypescript, BiLogoMongodb, BiLogoFlask } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { BsGit } from "react-icons/bs";
import { FaSalesforce } from "react-icons/fa";
import logoNext from "../assets/Images/i-nextjs.png";
import { Dialog } from "../components/Dialog/Dialog";

const Section = styled.section`
  position: relative;
  background-color: var(--dark);
  color: var(--white);
  height: 200vh;
  width: 100%;

  /* & > *:nth-child(odd) { */
  /* margin-left: 4rem; */
  /* @media screen and (max-width: 48em) {
      margin-left: 1rem;
    } */
  /* } */
`;

const FlexColumnIcons = styled.div`
  text-align: center;
`;

const SpaceTop = styled.h1`
  padding-top: 4rem;
`;

const ContainerSkills = styled.div`
  margin-left: 4rem;
  display: flex;
  svg {
    font-size: 10em;
  }
  h5 {
    font-size: 2em;
  }
  img {
    width: 180px;
    margin-bottom: 33px;
    filter: invert(100%);
    padding: 20px;
  }
  @media screen and (max-width: 800px) {
    margin-left: 0.5rem;
    svg {
      font-size: 5em;
    }
    h5 {
      font-size: 1em;
    }
    img {
      width: 90px;
      margin-bottom: 16px;
      filter: invert(100%);
      padding: 10px;
    }
  }
`;

const ContainerSkills2 = styled.div`
  margin-left: 4rem;
  display: flex;
  justify-content: flex-end;
  /* width: 90%; */
  padding-right: 2rem;

  svg {
    font-size: 10em;
  }
  h5 {
    font-size: 2em;
  }
  @media screen and (max-width: 800px) {
    svg {
      font-size: 5em;
    }
    h5 {
      font-size: 1em;
    }
    padding-right: 1rem;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: rotate(-25deg);
  z-index: 1;
  margin-bottom: 4rem;
  margin-top: 4rem;
  align-items: center;
`;

const MovingText = styled.h1`
  font-size: var(--fontBig);
  font-family: var(--fontL);

  background-image: linear-gradient(-45deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }
  @media screen and (max-width: 64em) {
    font-size: var(--fontxxl);
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontxl);
  }
`;

export const Habilidades = () => {
  const container = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const typewriterContainer3 = useRef<HTMLDivElement>(null);
  const textOne = useRef(null);
  const textTwo = useRef(null);

  useLayoutEffect(() => {
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top+=2000 top",
          end: "top+=2500 top",
          scrub: true,
          // markers: true,
        },
      })
      .fromTo(textOne.current, { x: 0 }, { x: "20%" }, "key1")
      .fromTo(textTwo.current, { x: 0 }, { x: "-20%" }, "key1");

    return () => {
      if (tl) tl.kill();
    };
  }, []);

  // RESPONSIVE
  let mm: any = gsap.matchMedia();

  mm.add(
    {
      // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
      isDesktop: `(min-width: 800px)`,
      isMobile: `(max-width: 799px)`,
      reduceMotion: "(prefers-reduced-motion: reduce)",
    },
    (context: any) => {
      useLayoutEffect(() => {
        // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
        let { isDesktop } = context.conditions;

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top-=100 top",
            end: "bottom top",
            pin: isDesktop ? true : false,
            scrub: isDesktop ? true : false,
            markers: true,
          },
        });

        tl.fromTo(
          ".box-a",
          { x: isDesktop ? -600 : 0, y: isDesktop ? -300 : 0 },
          { x: 0, y: 0, ease: "bounce.out" }
        );
        tl.fromTo(
          ".box-b",
          { x: isDesktop ? -600 : 0 },
          { x: 0, ease: "bounce.out" }
        );
        tl.fromTo(
          ".box-c",
          { x: isDesktop ? -600 : 0, y: isDesktop ? 300 : 0 },
          { x: 0, y: 0, ease: "bounce.out" }
        ).fromTo(
          dialogRef.current,
          { opacity: 0 },
          { opacity: 2, duration: 1 }
        );

        return () => {
          if (tl) tl.kill();
        };
      }, []);

      useLayoutEffect(() => {
        let { isDesktop } = context.conditions;
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top+=900 top",
            end: "bottom top",
            pin: isDesktop ? true : false,
            scrub: isDesktop ? true : false,
          },
        });
        tl.fromTo(
          ".box-d",
          { x: isDesktop ? 620 : 0, y: isDesktop ? -300 : 0 },
          { x: 0, y: 0, ease: "bounce.out" }
        );
        tl.fromTo(
          ".box-e",
          { x: isDesktop ? 620 : 0 },
          { x: 0, ease: "bounce.out" }
        );
        tl.fromTo(
          ".box-f",
          { x: isDesktop ? 620 : 0, y: isDesktop ? 300 : 0 },
          { x: 0, y: 0, ease: "bounce.out" }
        );

        return () => {
          if (tl) tl.kill();
        };
      }, []);
    }
  );
  // useLayoutEffect(() => {
  //   let tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: container.current,
  //       start: "top-=100 top",
  //       end: "bottom top",
  //       pin: true,
  //       scrub: true,
  //       // markers: true,
  //     },
  //   });
  //   tl.fromTo(
  //     ".box-a",
  //     { x: -600, y: -300 },
  //     { x: 0, y: 0, ease: "bounce.out" }
  //   );
  //   tl.fromTo(".box-b", { x: -600 }, { x: 0, ease: "bounce.out" });
  //   tl.fromTo(
  //     ".box-c",
  //     { x: -600, y: 300 },
  //     { x: 0, y: 0, ease: "bounce.out" }
  //   ).fromTo(dialogRef.current, { opacity: 0 }, { opacity: 2, duration: 1 });

  //   return () => {
  //     if (tl) tl.kill();
  //   };
  // }, []);

  // useLayoutEffect(() => {
  //   let tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: container.current,
  //       start: "top+=900 top",
  //       end: "bottom top",
  //       pin: true,
  //       scrub: true,
  //     },
  //   });
  //   tl.fromTo(
  //     ".box-d",
  //     { x: 620, y: -300 },
  //     { x: 0, y: 0, ease: "bounce.out" }
  //   );
  //   tl.fromTo(".box-e", { x: 620 }, { x: 0, ease: "bounce.out" });
  //   tl.fromTo(".box-f", { x: 620, y: 300 }, { x: 0, y: 0, ease: "bounce.out" });

  //   return () => {
  //     if (tl) tl.kill();
  //   };
  // }, []);

  return (
    <Section id="habilidades" ref={container}>
      <SpaceTop />
      {/* <div ref={dialogRef}>
        <Dialog
          top="8%"
          left="45%"
          text="Su capacidad para dominar varias habilidades muestra que siempre hay oportunidades para crecer en el camino hacia la excelencia"
          rotateTransform="rotate(-30deg)"
          ref={typewriterContainer3}
          typewriter="typewriter3"
        />
      </div> */}
      <ContainerSkills className="box box-a">
        <FlexColumnIcons>
          <DiHtml5 />
          <h5>HTML</h5>
        </FlexColumnIcons>
        <FlexColumnIcons>
          <DiCss3 />
          <h5>CSS</h5>
        </FlexColumnIcons>
        <FlexColumnIcons>
          <RiJavascriptFill />
          <h5>JavaScript</h5>
        </FlexColumnIcons>
      </ContainerSkills>
      <ContainerSkills className="box box-b">
        <FlexColumnIcons>
          <BiLogoTypescript />
          <h5>TypeScript</h5>
        </FlexColumnIcons>
        <FlexColumnIcons>
          <DiReact />
          <h5>React</h5>
        </FlexColumnIcons>
        <FlexColumnIcons>
          <DiReact />
          <h5>React Native</h5>
        </FlexColumnIcons>
      </ContainerSkills>
      <ContainerSkills className="box box-c">
        <FlexColumnIcons>
          <img src={logoNext} />
          <h5>Next</h5>
        </FlexColumnIcons>
        <FlexColumnIcons>
          <FaNode />
          <h5>Node</h5>
        </FlexColumnIcons>
        <FlexColumnIcons>
          <DiPython />
          <h5>Python</h5>
        </FlexColumnIcons>
      </ContainerSkills>
      <TextContainer>
        <MovingText ref={textOne}>APTITUDES</MovingText>
        <MovingText ref={textTwo}>DESTREZA</MovingText>
      </TextContainer>
      <ContainerSkills2 className="box2 box-d">
        <FlexColumnIcons>
          <DiSass />
          <h5>SASS</h5>
        </FlexColumnIcons>
        <FlexColumnIcons>
          <BiLogoMongodb />
          <h5>MongoDB</h5>
        </FlexColumnIcons>
        <FlexColumnIcons>
          <DiMysql />
          <h5>MySQL</h5>
        </FlexColumnIcons>
      </ContainerSkills2>
      <ContainerSkills2 className="box2 box-e">
        <FlexColumnIcons>
          <BsGit />
          <h5>GIT</h5>
        </FlexColumnIcons>
        <FlexColumnIcons>
          <BiLogoFlask />
          <h5>Flask</h5>
        </FlexColumnIcons>
        <FlexColumnIcons>
          <SiMui />
          <h5>Material UI</h5>
        </FlexColumnIcons>
      </ContainerSkills2>
      <ContainerSkills2 className="box2 box-f">
        <FlexColumnIcons>
          <FaSalesforce />
          <h5>SalesForce</h5>
        </FlexColumnIcons>
        <FlexColumnIcons>
          <DiDrupal />
          <h5>Drupal</h5>
        </FlexColumnIcons>
        <FlexColumnIcons>
          <DiWordpress />
          <h5>WordPress</h5>
        </FlexColumnIcons>
      </ContainerSkills2>
    </Section>
  );
};
