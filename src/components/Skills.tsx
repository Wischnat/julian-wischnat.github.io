import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiNodedotjs,
} from "react-icons/si";

export const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-14" aria-label="Skills">
      <h2 className="mt-3 mb-1 text-3xl font-medium tracking-tight text-teal-400">
        Skills
      </h2>
      <div className="p-6 rounded-lg shadow bg-slate-400/5 border-2 border-gray-500/10">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xl font-bold text-teal-400 ">
          <li className="flex items-center">
            <SiHtml5 />
            <p className="ml-2 font-normal text-slate-400">HTML</p>
          </li>
          <li className="flex items-center">
            <SiCss3 />
            <p className="ml-2 font-normal text-slate-400">CSS</p>
          </li>
          <li className="flex items-center">
            <SiJavascript />
            <p className="ml-2 font-normal text-slate-400">JavaScript</p>
          </li>
          <li className="flex items-center">
            <SiTypescript />
            <p className="ml-2 font-normal text-slate-400">TypeScript</p>
          </li>
          <li className="flex items-center">
            <SiNodedotjs />
            <p className="ml-2 font-normal text-slate-400">Node.js</p>
          </li>
          <li className="flex items-center">
            <SiPostgresql />
            <p className="ml-2 font-normal text-slate-400">PostgresSQL</p>
          </li>
          <li className="flex items-center">
            <SiMongodb />
            <p className="ml-2 font-normal text-slate-400">MongoDB</p>
          </li>
          <li className="flex items-center">
            <SiFirebase />
            <p className="ml-2 font-normal text-slate-400">Firebase</p>
          </li>
          <li className="flex items-center">
            <SiTailwindcss />
            <p className="ml-2 font-normal text-slate-400">Tailwind CSS</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
