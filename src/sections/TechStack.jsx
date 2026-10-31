
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaJs,
  FaGitAlt,
  FaWhatsapp,
} from "react-icons/fa";

import {
  SiTypescript,
  SiPostgresql,
  SiTailwindcss,
  SiN8N,
  SiGooglesheets,
  SiNotion,
  SiTelegram,
} from "react-icons/si";

import { BrainCircuit, DatabaseZap } from "lucide-react";

function TechStack() {
  const techs = [
    // DESENVOLVIMENTO FULL STACK
    {
      name: "React",
      icon: <FaReact />,
      color: "#61DBFB",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      color: "#68A063",
    },
    {
      name: "Docker",
      icon: <FaDocker />,
      color: "#2496ED",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      color: "#F7DF1E",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "#3178C6",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
      color: "#336791",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "#38BDF8",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      color: "#F1502F",
    },

    // AUTOMAÇÃO E INTELIGÊNCIA ARTIFICIAL
    {
      name: "n8n",
      icon: <SiN8N />,
      color: "#EA4B71",
    },
    {
      name: "Inteligência Artificial",
      icon: <BrainCircuit />,
      color: "#22D3EE",
    },
    {
      name: "Google Sheets",
      icon: <SiGooglesheets />,
      color: "#34A853",
    },
    {
      name: "Notion",
      icon: <SiNotion />,
      color: "#FFFFFF",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      color: "#25D366",
    },
    {
      name: "Telegram",
      icon: <SiTelegram />,
      color: "#26A5E4",
    },
    {
      name: "Apify",
      icon: <DatabaseZap size={48} strokeWidth={1.8} />,
      color: "#97D700",
    },
  ];

  return (
    <section
      id="tech"
      className="flex justify-center px-4 py-24"
    >
      <div className="w-full max-w-[900px] overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#0b0b0b]/90 p-6 shadow-xl md:p-10">

        <h2 className="section-title mb-10 text-center">
          Tecnologias & Ferramentas
        </h2>

        <div className="marquee relative overflow-hidden">
          <div className="marquee-track flex items-center gap-0">

            {/* PRIMEIRA SEQUÊNCIA */}
            <div className="flex shrink-0 items-center gap-12 pr-12 md:gap-16 md:pr-16">
              {techs.map((tech) => (
                <div
                  key={tech.name}
                  className="group flex shrink-0 flex-col items-center gap-3"
                  title={tech.name}
                >
                  <div
                    className="text-5xl transition-transform duration-300 group-hover:scale-110"
                    style={{ color: tech.color }}
                    aria-hidden="true"
                  >
                    {tech.icon}
                  </div>

                  <span className="whitespace-nowrap text-xs text-slate-400">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            {/* DUPLICAÇÃO PARA LOOP INFINITO */}
            <div
              className="flex shrink-0 items-center gap-12 pr-12 md:gap-16 md:pr-16"
              aria-hidden="true"
            >
              {techs.map((tech) => (
                <div
                  key={`dup-${tech.name}`}
                  className="group flex shrink-0 flex-col items-center gap-3"
                  title={tech.name}
                >
                  <div
                    className="text-5xl transition-transform duration-300 group-hover:scale-110"
                    style={{ color: tech.color }}
                  >
                    {tech.icon}
                  </div>

                  <span className="whitespace-nowrap text-xs text-slate-400">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
