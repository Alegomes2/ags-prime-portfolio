import { useState } from "react";

function Terminal() {

  const [input, setInput] = useState("");

  const [history, setHistory] = useState([
    "DevLab Terminal v1.0",
    'Digite "help" para ver os comandos disponíveis.',
    ""
  ]);

  const commands = {

    help: [
        "commands:",
        "about",
        "projects",
        "contact",
        "github",
        "linkedin",
        "clear"
    ],

    about: [
      "Portfólio DevLab criado por Alexandre.",
      "Com foco em React e Node.js."
    ],

    projects: [
      "DevBurger",
      "TaskFlow API",
      "Docker Lab"
    ],

    contact: [
      "email: alexandre@email.com",
      "github: github.com/alexandre",
      "linkedin: linkedin.com/in/alexandre"
    ]

  };

  const runCommand = (cmd) => {

    const command = cmd.toLowerCase().trim();

    if (command === "clear") {
      setHistory([]);
      return;
    }

    if (command === "github") {

  window.open("https://github.com/Alegomes2", "_blank");

  setHistory(prev => [
    ...prev,
    "> github",
    "abrindo github..."
  ]);

  return;
}

if (command === "linkedin") {

  window.open("https://linkedin.com/in/alexandregomessantos", "_blank");

  setHistory(prev => [
    ...prev,
    "> linkedin",
    "abrindo linkedin..."
  ]);

  return;
}

    if (commands[command]) {

      setHistory(prev => [
        ...prev,
        `> ${command}`,
        ...commands[command],
        ""
      ]);

    } else {

      setHistory(prev => [
        ...prev,
        `> ${command}`,
        "comando não reconhecido",
        ""
      ]);

    }

  };

  const handleKeyDown = (e) => {

    if (e.key === "Enter") {

      runCommand(input);
      setInput("");

    }

  };

  return (

    <section id="contact" className="py-32">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12 text-primary text-center">
          Prompt de Comando
        </h2>

        <div className="bg-black border border-primary/40 rounded-xl p-6 font-mono text-green-400 text-sm">

          {history.map((line, index) => (
            <p key={index}>{line}</p>
          ))}

            <div className="flex items-center gap-2">

                <span className="text-primary">{">"}</span>

                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="bg-transparent outline-none text-green-400 flex-1"
                />

                <span className="cursor"></span>

            </div>

        </div>

      </div>

    </section>

  );

}

export default Terminal;