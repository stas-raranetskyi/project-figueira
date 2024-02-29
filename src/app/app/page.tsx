'use client';

import { useTranslation } from 'react-i18next';

import { withTranslationsProvider } from '@/components/TranslationsProvider';

const ns = ['home'];
const Home = () => {
	const { t } = useTranslation(ns);
	return <main>{t('hello')}</main>;
};

export default withTranslationsProvider(Home, ns);
