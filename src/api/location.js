export async function getLocation() {
  const res = await fetch("https://ipinfo.io/json");
  return res.json();
}