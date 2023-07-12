import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";
import {
  Suspense,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import styled from "styled-components";
import { ColorContext } from "../context/ColorContext";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(155, 181, 206, 0.8);
  position: relative;

  @media screen and (max-width: 48em) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(155, 181, 206, 0.4);
  position: relative;

  @media screen and (max-width: 48em) {
    display: none;
  }
`;

const Center = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  font-size: var(--fontxxl);
  text-transform: uppercase;
  filter: brightness(0.85);

  @media screen and (max-width: 48em) {
    top: 2rem;
    transform: translate(-50%, 0%) rotate(0deg);
  }
`;

export const ColorSection = () => {
  const sectionRef = useRef<any>(null);
  const rightRef = useRef<any>(null);
  const leftRef = useRef<any>(null);
  const textRef = useRef<any>(null);

  const { currentColor, changeColorContext }: any = useContext(ColorContext);

  useEffect(() => {
    let rightElem = rightRef.current;
    let leftElem = leftRef.current;
    let textElem = textRef.current;
    textElem!.innerText = currentColor.text;
    textElem!.style.color = currentColor.color;
    rightElem!.style.backgroundColor = `rgba(${currentColor.rgbColor}, 0.4)`;
    leftElem!.style.backgroundColor = `rgba(${currentColor.rgbColor}, 0.8)`;
  }, [currentColor]);

  useLayoutEffect(() => {
    let elem = sectionRef.current;

    let updateColor = (color: any, text: any, rgbColor: any) => {
      const colorObj = {
        color,
        text,
        rgbColor,
      };
      changeColorContext(colorObj);
    };

    gsap.to(elem, {
      scrollTrigger: {
        trigger: elem,
        start: "top top",
        end: `+=${elem!.offsetWidth + 1000}`,
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: elem,
          start: "top top",
          end: `+=${elem.offsetWidth + 1000}`,
          scrub: true,
        },
      })
      .to(elem, {
        onStart: updateColor,
        onStartParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
      })
      .to(elem, {
        onStart: updateColor,
        onStartParams: ["#F9E5C9", "Gold", "249, 229, 201"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#F9E5C9", "Gold", "249, 229, 201"],
      })
      .to(elem, {
        onStart: updateColor,
        onStartParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
      })
      .to(elem, {
        onStart: updateColor,
        onStartParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
      })
      .to(elem, {
        onStart: updateColor,
        onStartParams: ["#A50011", "Red", "165, 0, 17"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#A50011", "Red", "165, 0, 17"],
      })
      .to(elem, {
        onStart: updateColor,
        onStartParams: ["#215E7C", "Blue", "33, 94, 124"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#215E7C", "Blue", "33, 94, 124"],
      });

    return () => {
      if (t2) t2.kill();
    };
  }, []);

  return (
    <Section ref={sectionRef}>
      <Left ref={leftRef} />
      <Center ref={textRef}>Sierra Blue</Center>
      <Right ref={rightRef}>
        <Canvas camera={{ fov: 80 }}>
          <ambientLight intensity={0.15} />
          <directionalLight position={0.5} />
          <Suspense fallback={null}>{/* <Model2 /> */}</Suspense>
        </Canvas>
      </Right>
    </Section>
  );
};
