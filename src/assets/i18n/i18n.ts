import { I18n } from "i18n-js";
import de from "./de.json";

const i18n = new I18n({
  ...de,
});

i18n.defaultLocale = "de";
i18n.locale = "de";

export default i18n;
