import { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaDocker, FaJs } from "react-icons/fa";
import { SiTypescript, SiPostgresql } from "react-icons/si";

const icons = [
  { icon: <FaReact />, color: "#61DBFB" },
  { icon: <FaNodeJs />, color: "#68A063" },
  { icon: <FaDocker />, color: "#2496ED" },
  { icon: <FaJs />, color: "#F7DF1E" },
  { icon: <SiTypescript />, color: "#3178C6" },
  { icon: <SiPostgresql />, color: "#336791" }
];

function randomGrid() {
  const gridSize = 60; // tamanho do quadrado do grid
  const cols = Math.floor(window.innerWidth / gridSize);
  const rows = Math.floor(window.innerHeight / gridSize);

  const x = Math.floor(Math.random() * cols) * gridSize;
  const y = Math.floor(Math.random() * rows) * gridSize;

  return { x, y };
}

function TechGridWalker() {

  const [positions, setPositions] = useState(
    icons.map(() => randomGrid())
  );

  useEffect(() => {

    const interval = setInterval(() => {

      setPositions(
        icons.map(() => randomGrid())
      );

    }, 4000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="fixed inset-0 pointer-events-none z-[5]">

      {icons.map((tech, index) => (

        <div
          key={index}
          style={{
            position: "absolute",
            left: positions[index].x,
            top: positions[index].y,
            color: tech.color,
            fontSize: "28px",
            transition: "all 3s linear"
          }}
        >
          {tech.icon}
        </div>

      ))}

    </div>

  );

}

export default TechGridWalker;