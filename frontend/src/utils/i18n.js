import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translation from '../locales/translation.json';

const resources = {
  en : {
    translation : translation,
  },
};

i18n
  .use( initReactI18next )
  .init( {
    resources,
    lng : 'en',
    debug : true,
  } );

export default i18n;
