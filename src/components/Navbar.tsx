import { SetStateAction, useEffect, useState } from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { Link } from "react-scroll";
import i18n from "../assets/i18n/i18n";

export const Navbar = () => {
  const about = "about";
  const skills = "skills";
  const projects = "projects";
  const [activeLink, setActiveLink] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const percent90Screen: number = window.innerHeight * 0.9;
    const onScroll = () => {
      if (window.screenY < percent90Screen) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateSetActiveLink = (value: SetStateAction<string>) => {
    setActiveLink(value);
  };

  return (
    <nav
      className={
        scrolled
          ? "flex justify-between sticky top-0 bg-gray-900 py-3"
          : "flex justify-between top-0"
      }
    >
      <section className="w-full max-w-screen-xl mx-auto">
        <ul className="flex justify-around items-center">
          <li>
            <Link
              className={
                activeLink === about
                  ? "font-bold text-teal-400 tracking-wider text-lg opacity-100"
                  : "font-normal text-slate-200 tracking-wider text-lg opacity-80"
              }
              onSetActive={() => onUpdateSetActiveLink(about)}
              onClick={() => onUpdateSetActiveLink(about)}
              spy
              to={about}
            >
              {i18n.t("navbar.about")}
            </Link>
          </li>
          <li>
            <Link
              className={
                activeLink === skills
                  ? "font-bold text-teal-400 tracking-wider text-lg opacity-100"
                  : "font-normal text-slate-200 tracking-wider text-lg opacity-80"
              }
              onSetActive={() => onUpdateSetActiveLink(skills)}
              onClick={() => onUpdateSetActiveLink(skills)}
              spy
              to={skills}
            >
              {i18n.t("navbar.skills")}
            </Link>
          </li>
          <li>
            <Link
              className={
                activeLink === projects
                  ? "font-bold text-teal-400 tracking-wider text-lg opacity-100"
                  : "font-normal text-slate-200 tracking-wider text-lg opacity-80"
              }
              onSetActive={() => onUpdateSetActiveLink(projects)}
              onClick={() => onUpdateSetActiveLink(projects)}
              spy
              to={projects}
            >
              {i18n.t("navbar.projects")}
            </Link>
          </li>
        </ul>
      </section>
      <section>
        <ul className="flex items-center justify-end">
          <li>
            <a
              href="https://www.linkedin.com/in/julian-wischnat"
              className="relative hidden md:inline-flex w-8 h-8 items-center justify-center mx-1 leading-none text-teal-400 border rounded-3xl border-solid border-teal-400 hover:text-gray-900 hover:duration-300 z-0
            before:w-8 before:h-8 before:absolute before:bg-teal-400 before:duration-300 ease-in-out before:rounded-3xl transition-[0.3s] before:scale-0 hover:before:scale-100 before:-z-10"
            >
              <SiLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Wischnat"
              className="relative hidden md:inline-flex w-8 h-8 items-center justify-center mx-1 leading-none text-teal-400 border rounded-3xl border-solid border-teal-400 hover:text-gray-900 hover:duration-300 z-20
            before:w-8 before:h-8 before:absolute before:bg-teal-400 before:duration-300 ease-in-out before:rounded-3xl before:scale-0 hover:before:scale-100 hover:before:-z-10"
            >
              <SiGithub />
            </a>
          </li>
        </ul>
      </section>
    </nav>
  );
};
