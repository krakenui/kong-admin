import enLang from './en-US';
import viLang from './vi-VN';
import jaLang from './ja-JP';

export const languageData = [
  {
    languageId: 'english',
    locale: 'en',
    name: 'English',
    icon: 'us',
  },
  {
    languageId: 'vietnamese',
    locale: 'vi',
    name: 'Vietnamese',
    icon: 'vn',
  },
  {
    languageId: 'japanese',
    locale: 'ja',
    name: 'Japanese',
    icon: 'jp',
  },
];

const AppLocale: any = {
  en: enLang,
  vi: viLang,
  ja: jaLang,
};

export default AppLocale;
