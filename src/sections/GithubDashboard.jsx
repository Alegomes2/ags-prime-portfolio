import { useEffect, useState } from "react";
import { getGithubRepos } from "../api/github";

function GithubDashboard() {

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getGithubRepos("Alegomes2").then(setRepos);
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-6">

      {repos.slice(0,6).map(repo => (
        <div key={repo.id} className="bg-slate-900 p-6 rounded-lg">

          <h3 className="text-cyan-400 font-bold">
            {repo.name}
          </h3>

          <p className="text-gray-400 text-sm">
            {repo.description}
          </p>

        </div>
      ))}

    </div>
  );
}

export default GithubDashboard;