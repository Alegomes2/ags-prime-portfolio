import { useEffect, useState } from "react";

function TechNews() {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = "3f0d3c9de5e445328f64110e6a4bbb7f";

  useEffect(() => {

    const fetchNews = async () => {

      try {

        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=6&apiKey=${apiKey}`
        );

        const data = await res.json();

        if (data.articles) {
          setNews(data.articles);
        }

      } catch (error) {
        console.error("News API error:", error);
      }

      setLoading(false);

    };

    fetchNews();

  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center">
        <p className="text-gray-400">Loading tech news...</p>
      </section>
    );
  }

  return (

    <section id="technews" className="py-24 px-6 max-w-6xl mx-auto">

      <h2 className="text-3xl font-bold text-cyan-400 mb-10">
        Tech News
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {news.length > 0 ? (

          news.map((article, i) => (

            <a
              key={i}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-400 transition"
            >

              <h3 className="text-white font-semibold mb-2">
                {article.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {article.source?.name}
              </p>

            </a>

          ))

        ) : (

          <p className="text-gray-400">
            Could not load tech news.
          </p>

        )}

      </div>

    </section>

  );
}

export default TechNews;