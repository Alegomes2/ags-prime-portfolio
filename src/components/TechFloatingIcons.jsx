import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaJs
} from "react-icons/fa";

import {
  SiTypescript,
  SiPostgresql
} from "react-icons/si";

function TechFloatingIcons() {

  return (

    <div className="floating-tech">

      <FaReact className="tech-icon react"/>
      <FaNodeJs className="tech-icon node"/>
      <FaDocker className="tech-icon docker"/>
      <FaJs className="tech-icon js"/>
      <SiTypescript className="tech-icon ts"/>
      <SiPostgresql className="tech-icon pg"/>

    </div>

  );

}

export default TechFloatingIcons;