import axios from "axios";

const config = {
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
    Authorization: import.meta.env.GITHUB_TOKEN,
  },
};

export const getGitHubProjects = async () => {
  return await axios.get("https://api.github.com/users/Wischnat/repos", config);
};

export const getGitHubProjectLanguages = async (languagesUrl: string) => {
  return await axios.get(languagesUrl, config);
};
