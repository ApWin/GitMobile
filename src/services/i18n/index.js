import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import resources from './resources';

import config from '../config';

const languageDetector = {
  type: 'languageDetector',

  async: true,
  detect: cb => cb('uz'),
  init: () => {},
  cacheUserLanguage: data => {
    console.log(data);
  },
};

const options = {
  resources,
  fallbackLng: 'uz',
  compatibilityJSON: 'v3',
  whitelist: ['uz', 'ru', 'en'],
  ns: ['main'],
  defaultNS: 'main',
  keySeparator: false,
  interpolation: {
    escapeValue: true,
    formatSeparator: ',',
  },
  react: {
    useSuspense: false,
    wait: true,
  },
  backend: {
    // loadPath: `${config.API_ROOT}/translation/words?_l={{lng}}`,
    // addPath: `${config.API_ROOT}/translation/add?_l={{lng}}`,
  },
  saveMissing: true,
  debug: true,

  detection: {
    order: ['localStorage'],
    lookupLocalStorage: 'language',
    caches: ['localStorage'],
  },
};

export default () => {
  i18n.use(languageDetector).use(initReactI18next).init(options);
  return i18n;
};
