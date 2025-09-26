import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const { user, repos } = useLoaderData();

  return (
    <div className="p-5 max-sm:mt-16 mt-18">
      <div
        className="max-w-lg mx-auto rounded-2xl shadow-lg p-10 text-center"
        style={{
          background: "radial-gradient(circle at top left, #003366, #001a33)",
          color: "#dbeafe",
        }}
      >
        <h2
          className="text-xl font-bold mb-4"
          style={{
            color: "#60a5fa",
            textShadow: "0 0 12px #2563eb",
          }}
        >
          GitHub Followers:{" "}
          <span className="text-blue-400">{user.followers}</span>
        </h2>

        <img
          src={user.avatar_url}
          alt="Profile Photo"
          width={150}
          className="rounded-full mx-auto border-4 border-blue-900 shadow-lg"
        />

        <h3
          className="text-lg font-semibold mt-6 mb-2"
          style={{
            color: "#93c5fd",
            textShadow: "0 0 10px #1e40af",
          }}
        >
          Repositories
        </h3>

        <ul className="space-y-2">
          {repos.map((repo) => (
            <li
              key={repo.id}
              className="flex items-center justify-between p-3 rounded-lg shadow-sm transition"
              style={{
                background:
                  "radial-gradient(circle at top left, #0d1b2a, #000814)",
                color: "#60a5fa",
                textShadow: "0 0 10px #3b82f6",
              }}
            >
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 font-medium hover:underline"
              >
                {repo.name}
              </a>
              <span className="text-sm text-blue-400">
                ⭐ {repo.stargazers_count}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  try {
    const [userResponse, reposResponse] = await Promise.all([
      fetch("https://api.github.com/users/vaibhavpunyani772"),
      fetch("https://api.github.com/users/vaibhavpunyani772/repos"),
    ]);

    if (!userResponse.ok || !reposResponse.ok) {
      throw new Error("GitHub API request failed");
    }

    const user = await userResponse.json();
    const repos = await reposResponse.json();

    return { user, repos };
  } catch (error) {
    console.error("Loader error:", error);
    throw error; // let React Router show errorElement
  }
};
