
import { useState } from "react";

const quotes = [
  {
    content: "Primeiro resolva o problema. Depois escreva o código.",
    author: "John Johnson",
  },
  {
    content: "Simplicidade é o último grau de sofisticação.",
    author: "Leonardo da Vinci",
  },
  {
    content: "A melhor maneira de prever o futuro é criá-lo.",
    author: "Peter Drucker",
  },
  {
    content: "Grandes coisas são feitas por uma série de pequenas coisas reunidas.",
    author: "Vincent van Gogh",
  },
  {
    content: "Aprender nunca esgota a mente.",
    author: "Leonardo da Vinci",
  },
];

function getRandomQuote(excludeIndex = -1) {
  if (quotes.length === 1) return 0;

  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === excludeIndex);

  return randomIndex;
}

export default function DevQuote() {
  const [currentIndex, setCurrentIndex] = useState(() =>
    getRandomQuote()
  );

  const loadQuote = () => {
    setCurrentIndex((previousIndex) =>
      getRandomQuote(previousIndex)
    );
  };

  const quote = quotes[currentIndex];

  return (
    <section className="px-6 py-16 text-center">
      <div className="mx-auto max-w-2xl rounded-xl border border-cyan-500/20 bg-[#0b0b0b] p-8 shadow-lg">
        <p className="mb-4 text-lg leading-relaxed text-gray-300">
          "{quote.content}"
        </p>

        <span className="text-cyan-400">
          — {quote.author}
        </span>

        <div className="mt-6">
          <button
            type="button"
            onClick={loadQuote}
            className="rounded-lg border border-cyan-400 px-5 py-2 text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
          >
            Nova frase
          </button>
        </div>
      </div>
    </section>
  );
}
