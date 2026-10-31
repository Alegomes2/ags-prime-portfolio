export async function getGithubRepos(username) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  return res.json();
}