import { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import {
  getGitHubProjectLanguages,
  getGitHubProjects,
} from "../apis/GitHubAPI";
import { GitHubProject } from "../types/GitHubProject";
import i18n from "../assets/i18n/i18n";

export const Projects = () => {
  const [gitHubProjects, setGitHubProjects] = useState<GitHubProject[]>([]);

  useEffect(() => {
    async function getProjects() {
      const projects: GitHubProject[] = (await getGitHubProjects()).data;
      for (const project of projects) {
        const languages: object = (
          await getGitHubProjectLanguages(project.languages_url)
        ).data;
        project.languages = Object.keys(languages);
      }
      setGitHubProjects(projects);
    }

    if (gitHubProjects.length === 0) {
      getProjects();
    }
  }, [gitHubProjects]);

  return (
    <section id="projects" className="scroll-mt-14">
      <h2 className="mt-12 mb-1 text-3xl font-medium tracking-tight text-teal-400">
        {i18n.t("projects.title")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {gitHubProjects.map((project: GitHubProject) => {
          return (
            <ProjectCard
              name={project.name}
              htmlUrl={project.html_url}
              description={project.description}
              topics={project.topics}
              languages={project.languages}
            />
          );
        })}
      </div>
    </section>
  );
};
