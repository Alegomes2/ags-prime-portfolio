export async function getTechNews() {

  const apiKey = "3f0d3c9de5e445328f64110e6a4bbb7f";

  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}`
  );

  return res.json();
}