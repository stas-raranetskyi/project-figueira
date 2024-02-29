import { Config } from 'next-i18n-router/dist/types';

const defaultLocale = 'en';
const i18nConfig: Config = {
	locales: [defaultLocale, 'de'],
	defaultLocale,
};

export default i18nConfig;
