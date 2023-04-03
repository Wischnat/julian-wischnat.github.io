export const Banner = () => {
  return (
    <header id="about" className="py-24 scroll-mt-14">
      <span className="rounded-full font-bold text-slate-200 tracking-wider text-xl px-4 py-2 bg-gradient-to-r from-teal-500 to-bg-gray-900">
        Welcome to my Portfolio
      </span>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        Julian Wischnat
      </h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
        Student
      </h2>
      <p className="mt-4 max-w-xs leading-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, rem
        voluptatibus? Ratione quam inventore nisi. Ab ipsum assumenda facere,
        harum atque id ratione eum ea quos exercitationem. Dolores, quisquam
        quasi?
      </p>
      <div className="flex justify-center ">
        <a
          href="mailto:julian.wischnat@proton.me"
          className="text-teal-400 text-2xl py-6 px-10 font-bold border-2 border-teal-400 rounded-xl bg-slate-400/5 hover:bg-teal-500/20"
        >
          Let's connect
        </a>
      </div>
    </header>
  );
};
