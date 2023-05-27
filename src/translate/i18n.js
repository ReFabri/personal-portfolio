import i18n from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import messages from "./languages/index.js";

i18n.use(languageDetector).init({
  debug: false,
  defaultNS: ["translations"],
  fallbackLng: "en",
  ns: ["translations"],
  resources: messages,
});

export default i18n;
