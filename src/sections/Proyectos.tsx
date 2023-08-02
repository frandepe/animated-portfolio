import gsap from "gsap";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import { Dialog } from "../components/Dialog/Dialog";
import { CardProject } from "../components/CardProject/CardProject";
import guiaPellegrini from "../assets/Images/projects/guiapelleProject.jpg";
import ndCapacitaciones from "../assets/Images/projects/ndcapacitacionesProject.jpg";
import rym from "../assets/Images/projects/rymProject.jpg";
import games from "../assets/Images/projects/gamesProject.jpg";
import queseria from "../assets/Images/projects/queseriaProject.jpg";
import mobile from "../assets/Images/projects/mobileProject.jpg";
import todo from "../assets/Images/projects/todoProject.jpg";
import fitness from "../assets/Images/projects/fitnessProject.jpg";
import poke from "../assets/Images/projects/pokeProject.png";
import meal from "../assets/Images/projects/mealProject.jpg";
import alkemy from "../assets/Images/projects/alkemyProject.jpg";

const Section = styled.section`
  position: relative;
  overflow: hidden;
  background-color: var(--white);
`;
const Sect = styled.section`
  z-index: 999;
`;

const ScrollSectionInner = styled.div`
  height: 100vh;
  width: 400vw;
  display: flex;
  flex-direction: row;
  position: relative;

  & > *:nth-child(2) {
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      #1f1f1f 50%,
      rgba(71, 71, 71, 1) 100%
    );
  }
  & > *:nth-child(3) {
    background: linear-gradient(
      90deg,
      rgba(71, 71, 71, 1) 0%,
      #727272 50%,
      #929292 100%
    );
  }
  & > *:nth-child(4) {
    background: linear-gradient(90deg, #929292 0%, #b6b6b6 50%, #f5f5f5 100%);
  }
`;

const ProjectsTop = styled.div`
  width: 50vw;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 1060px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const ProjectsBottom = styled.div`
  width: 50vw;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 1060px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const ScrollSection = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Proyectos = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const typewriterContainer4 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let tl = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          // markers: true,
        },
      }
    );

    return () => {
      if (tl) tl.kill();
    };
  }, []);

  useLayoutEffect(() => {
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top-=600 top",
          end: "500 top",
          scrub: true,
        },
      })
      .fromTo(dialogRef.current, { opacity: 0 }, { opacity: 2, duration: 1 })
      .to(dialogRef.current, { opacity: 0 });

    return () => {
      if (tl) tl.kill();
    };
  }, []);

  return (
    <Section id="battery" ref={container}>
      <Sect ref={triggerRef}>
        <div ref={dialogRef}>
          <Dialog
            color="var(--dark)"
            top="15%"
            left="25%"
            text="Voy a programar el formulario de contacto antes de que alcances el final de la página, mientras tanto, te dejo una selección de proyectos interesantes"
            rotateTransform="rotate(-20deg)"
            ref={typewriterContainer4}
            typewriter="typewriter4"
          />
        </div>

        <ScrollSectionInner ref={sectionRef}>
          <ScrollSection></ScrollSection>
          <ScrollSection>
            <ProjectsTop>
              <CardProject
                title="Guía Pellegrini"
                description="Guía Pellegrini es un proyecto personal. Una plataforma que
              promueve negocios locales y fomenta el desarrollo económico de la
              ciudad de Pellegrini. Ofrece información actualizada y confiable
              para que los usuarios tomen decisiones informadas al contratar servicios en la ciudad."
                tecnologies="| React | TypeScript | Material UI | MongoDB | Express | Node |"
                deploy="https://www.guiapellegrini.com"
                image={guiaPellegrini}
              />
              <CardProject
                title="ND Capacitaciones"
                description="ND Capacitaciones es un trabajo freelance diseñado para un cliente con el fin de dar a conocer sus cursos de primeros auxilios"
                tecnologies="| React | Bootstrap | MongoDB | Express | Node |"
                deploy="https://ndcapacitaciones.com/"
                code="https://github.com/frandepe/NDcapacitaciones"
                image={ndCapacitaciones}
              />
            </ProjectsTop>
            <ProjectsBottom>
              <CardProject
                title="Rick & Morty"
                description="Rick and Morty es un proyecto desarrollado en React que utiliza la API de rickandmortyapi.com para crear una web interactiva basada en la popular serie de televisión Rick and Morty"
                tecnologies="| React | TypeScript | Tailwind | Graphql |"
                deploy="https://rym-ts.web.app/home/"
                code="https://github.com/frandepe/RyM-gql-ts"
                image={rym}
              />
              <CardProject
                title="Videojuegos"
                description="Este proyecto se centra en ofrecer a los entusiastas de los videojuegos una experiencia para descubrir con información detallada y jugar videojuegos gratuitos"
                tecnologies="| React | Firebase |"
                deploy="https://react-f2p.web.app/games"
                code="https://github.com/frandepe/Reactf2p"
                image={games}
              />
            </ProjectsBottom>
          </ScrollSection>
          <ScrollSection>
            <ProjectsTop>
              <CardProject
                title="Quesería Online"
                description="Uno de los proyectos más completos y autoadministrable por el propio dueño, con una interfaz amigable y atractiva, permite a los usuarios explorar mercadería y hacer una compra online"
                tecnologies="| React | MongoDB | Express | Node |"
                deploy="https://lodemario.vercel.app/"
                code="https://github.com/frandepe/lodemario"
                image={queseria}
              />
              <CardProject
                title="App Películas"
                description="Una app para android y ios que ofrece un catálogo de películas mediante la api themoviedb, con una interfaz elegante y fácil de usar"
                tecnologies="| React Native | TypeScript | Express | Node |"
                deploy="https://drive.google.com/file/d/1MuhScKokrplCuqmKebmCBaUMXcRa-BTV/view"
                code="https://github.com/frandepe/films-mobile"
                image={mobile}
              />
            </ProjectsTop>
            <ProjectsBottom>
              <CardProject
                title="TODO"
                description="Un proyecto que ofrece una aplicación para gestionar tareas y organizar la vida diaria de los usuarios de manera eficiente. Cuenta con un sistema de Drag and drop para mejorar la UX"
                tecnologies="| Next | TypeScript | Material UI | MongoDB | Docker |"
                deploy="https://drive.google.com/file/d/1lB3On1RjaxMLmdTZrStKScQ6mQAk7BMx/view"
                code="https://github.com/frandepe/next_todo"
                image={todo}
              />
              <CardProject
                title="Fitness App"
                description="Un emocionante proyecto que brinda a los entusiastas del fitness una plataforma completa para descubrir, aprender y practicar una amplia variedad de ejercicios mediante la api ExerciseDB."
                tecnologies="| React | TypeScript |"
                deploy="https://drive.google.com/file/d/1lB3On1RjaxMLmdTZrStKScQ6mQAk7BMx/view"
                code="https://github.com/frandepe/fitness_app"
                image={fitness}
              />
            </ProjectsBottom>
          </ScrollSection>
          <ScrollSection>
            <ProjectsTop>
              <CardProject
                title="Pokemones"
                description="Proyecto para guardar tus Pokemones favoritos. Realizado con la api pokeApi"
                tecnologies="| Next | Next UI | TypeScript |"
                deploy="https://fmd-next-pokemon.vercel.app/"
                code="https://github.com/frandepe/next_pokemon"
                image={poke}
              />
              <CardProject
                title="Orden de comida"
                description="Proyecto hecho en JavaScript Vanilla para pedir una orden de comida de manera online"
                tecnologies="| JavaScript |"
                deploy="https://ecommercerestoapp.netlify.app/"
                code="https://github.com/frandepe/restoApp"
                image={meal}
              />
            </ProjectsTop>
            <ProjectsBottom>
              <CardProject
                title="Menu de Hotel"
                description="Proyecto para pedir una orden de comida de manera online pensado para la estadía en un hotel"
                tecnologies="| React | Bootstrap |"
                deploy="https://hotel-menu-4ef42.web.app/"
                code="https://github.com/frandepe/hotel-menu"
                image={meal}
              />
              <CardProject
                title="Alkemy"
                description="Proyecto realizado para la aceleración de Alkemy Labs con un grupo de 5 compañeros y un team leader, metodologías agiles, meetings, evaluación de habilidades técnicas y blandas"
                tecnologies="| React |"
                deploy="https://drive.google.com/file/d/11JJmWuO2u9svV19QVFLR2oe6hrh7EpUc/view"
                code="https://github.com/alkemyTech/OT161-React-client"
                image={alkemy}
              />
            </ProjectsBottom>
          </ScrollSection>
        </ScrollSectionInner>
      </Sect>
    </Section>
  );
};

export default Proyectos;
