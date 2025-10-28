import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = ({ parentClass, style }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className={parentClass ? parentClass : ""}
      style={style}
      options={{
        fullScreen: { enable: false }, // important for section-contained particles
        background: { color: "transparent" },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            resize: true,
          },
          modes: {
            grab: { distance: 150, links: { opacity: 0.5 } },
          },
        },
        particles: {
          color: { value: "#00bfff" },
          links: {
            enable: true,
            distance: 120,
            color: "#7f5af0",
            opacity: 0.4,
            width: 1,
          },
          move: { enable: true, speed: 1, direction: "none", outModes: "bounce" },
          number: { value: 80, density: { enable: true, area: 800 } },
          opacity: { value: 0.6 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
