import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importa tus recursos de idioma aquí
// Por ejemplo, recursos en inglés y español
import translationEN from "../locales/en/translation.json"
import translationES from '../locales/es/translation.json';

// Los recursos de idioma serán objetos que contienen pares clave-valor para cada traducción
const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Idioma inicial
    keySeparator: false,
    interpolation: {
      escapeValue: false // React ya escapa los valores por defecto
    }
  });

export default i18n;