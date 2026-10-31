import { useEffect, useState } from "react";

function LoadingScreen({ onFinish }) {

  const lines = [
    "Initializing DevLab...",
    "Loading modules...",
    "Starting interface..."
  ];

  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {

    let index = 0;

    const interval = setInterval(() => {

      setVisibleLines(prev => [...prev, lines[index]]);

      index++;

      if (index === lines.length) {

        clearInterval(interval);

        setTimeout(() => {
          onFinish();
        }, 1000);

      }

    }, 700);

  }, []);

  return (

    <div className="fixed inset-0 bg-black flex items-center justify-center z-[999]">

      <div className="font-mono text-green-400 text-lg">

        {visibleLines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}

      </div>

    </div>

  );

}

export default LoadingScreen;