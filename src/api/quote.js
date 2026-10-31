export async function getQuote() {

  const response = await fetch(
    "https://api.quotable.io/random"
  );

  const data = await response.json();

  const translated = await fetch(
    `https://api.mymemory.translated.net/get?q=${data.content}&langpair=en|pt`
  );

  const translationData = await translated.json();

  return {
    content: translationData.responseData.translatedText,
    author: data.author
  };

}