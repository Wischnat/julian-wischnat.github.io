import { Banner } from "./components/Banner";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function App() {
  return (
    <div className="bg-gray-900 leading-loose text-slate-400 antialiased selection:bg-teal-300 selection:text-gray-900 -z-50">
      <div className="flex flex-row mx-auto min-h-screen max-w-screen-xl pr-6 md:pr-12 lg:pr-24">
        <div className="mx-auto min-h-screen max-w-screen-xl pl-6 md:pl-12 lg:pl-24 pb-20  pt-10">
          <Navbar />
          <main>
            <Banner />
            <Skills />
            <Projects />
          </main>
        </div>
      </div>
    </div>
  );
}
