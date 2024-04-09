import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
function ParticlesContainer(props) {
  // this customizes the component tsParticles installation
  const customInit = useCallback(async (engine) => {
    // this adds the bundle to tsParticles
    await loadFull(engine);
  });

  const options = {
    background: {
      color: {
        value: "#000022",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onHover: {
          enable: false,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 2,
        },
        repulse: {
          distance: 0,
          duration: 2,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 0,
        enable: true,
        opacity: 0.5,
        width: 0.5,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 35,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "star",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  return <Particles options={options} init={customInit} />;
}
export default ParticlesContainer;
