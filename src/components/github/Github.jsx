import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const { user, repos } = useLoaderData();
return (
    <div className="p-10">
    <div className="max-w-lg mx-auto  bg-white rounded-2xl shadow-lg p-10 text-center ">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        GitHub Followers: <span className="text-blue-600">{user.followers}</span>
      </h2>

      <img
        src={user.avatar_url}
        alt="Profile Photo"
        width={150}
        className="rounded-full mx-auto border-4 border-gray-900 shadow-md"
      />

      <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">
        Repositories
      </h3>

      <ul className="space-y-2">
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 p-3 rounded-lg shadow-sm transition"
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              {repo.name}
            </a>
            <span className="text-sm text-gray-600">⭐ {repo.stargazers_count}</span>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const userResponse = await fetch(
    "https://api.github.com/users/vaibhavpunyani772"
  );
  const reposResponse = await fetch(
    "https://api.github.com/users/vaibhavpunyani772/repos"
  );

  const user = await userResponse.json();
  const repos = await reposResponse.json();

  return { user, repos };
};
