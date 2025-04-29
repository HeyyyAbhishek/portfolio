import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function InteractiveBackground() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1000
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              }
            },
            opacity: {
              value: 0.2,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 1,
              random: true
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.2,
              width: 1
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 200,
                line_linked: {
                  opacity: 0.8
                }
              },
              push: {
                particles_nb: 4
              }
            }
          },
          retina_detect: true,
          background: {
            color: "#282C33",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
          }
        }}
      />
    </div>
  );
}

export default InteractiveBackground;
