import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { LanguagesEnum } from './enums';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: LanguagesEnum.english,
    debug: IS_DEV,
    interpolation: {
      escapeValue: false,
    },
    ns: ['app'],
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      useSuspense: true,
    },
  });

export { i18n };
