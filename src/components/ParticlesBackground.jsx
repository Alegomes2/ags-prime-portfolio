import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

function ParticlesBackground() {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 z-[1]"
      options={{
        fullScreen: {
          enable: false
        },

        background: {
          color: "transparent"
        },

        fpsLimit: 60,

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            },
            onClick: {
              enable: true,
              mode: "push"
            }
          },

          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 1
              }
            },

            push: {
              quantity: 4
            }
          }
        },

        particles: {

          number: {
            value: 100
          },

          color: {
            value: "#00ffff"
          },

          links: {
            enable: true,
            color: "#00ffff",
            distance: 150,
            opacity: 0.4,
            width: 1
          },

          move: {
            enable: true,
            speed: 1
          },

          size: {
            value: { min: 1, max: 3 }
          },

          opacity: {
            value: 0.6
          }

        },

        detectRetina: true
      }}
    />
  );
}

export default ParticlesBackground;