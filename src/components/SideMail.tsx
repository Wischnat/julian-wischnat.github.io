import i18n from "../assets/i18n/i18n";

export const SideMail = () => {
  return (
    <div className="hidden md:relative md:inline-flex">
      <div className="fixed [writing-mode:vertical-lr] flex justify-center items-center min-h-screen">
        <div className="bg-slate-400 w-[2px] h-full mt-28 "></div>
        <p className="my-6 mx-4"> {i18n.t("sideMail.mail")}</p>
        <div className="bg-slate-400 w-[2px] h-full mb-28"></div>
      </div>
    </div>
  );
};
