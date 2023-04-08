import React from "react";

interface ProjectCardProps {
  name: string;
  htmlUrl: string;
  languages?: string[];
  description: string;
  topics: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  htmlUrl,
  languages,
  description,
  topics,
}) => {
  return (
    <a
      href={htmlUrl}
      className="group block max-w-sm p-6 rounded-lg shadow bg-slate-400/5 border-2 border-gray-500/10 hover:bg-teal-500/20"
    >
      <h3 className="inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-teal-300">
        {name}
      </h3>
      <p className="mt-2 text-sm leading-normal">{description}</p>
      <ul className="mt-2 flex flex-wrap">
        {languages?.map((language: string, index: number) => {
          return (
            <li className="mr-1.5 mt-2" key={index}>
              <p className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                {language}
              </p>
            </li>
          );
        })}
      </ul>
      <ul className="mt-2 flex flex-wrap">
        {topics?.map((topic: string, index: number) => {
          return (
            <li className="mr-1.5 mt-2" key={index}>
              <p className="flex items-center rounded-full bg-teal-500/20 px-3 py-1 text-xs font-medium leading-4 text-teal-300">
                {topic}
              </p>
            </li>
          );
        })}
      </ul>
    </a>
  );
};
