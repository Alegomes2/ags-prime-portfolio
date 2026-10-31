import { useEffect, useState } from "react";
import { getQuote } from "../api/quote";

function DevQuote() {

  const [quote, setQuote] = useState(null);

  const loadQuote = async () => {
    const data = await getQuote();
    setQuote(data);
  };

  useEffect(() => {
    loadQuote();
  }, []);

  if (!quote) return null;

  return (

    <section className="py-16 text-center">

      <div className="max-w-2xl mx-auto bg-[#0b0b0b] border border-cyan-500/20 rounded-xl p-8">

        <p className="text-gray-300 text-lg mb-4">
          "{quote.content}"
        </p>

        <span className="text-cyan-400">
          — {quote.author}
        </span>

        <div className="mt-6">

          <button
            onClick={loadQuote}
            className="px-5 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
          >
            Nova frase
          </button>

        </div>

      </div>

    </section>

  );

}

export default DevQuote;