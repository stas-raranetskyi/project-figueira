import { NextPage } from 'next';

import LanguageChanger from '@/components/LanguageChanger';
import TranslationsProvider from '@/components/TranslationsProvider';
import { initTranslations } from '@/utils/i18n';

type Props = {
	params: { locale: string };
};
const ns = ['home', 'client'];
const Home: NextPage<Props> = async ({ params: { locale } }) => {
	const { t, resources } = await initTranslations(locale, ns);
	return (
		<TranslationsProvider locale={locale} namespaces={ns} resources={resources}>
			<main>{t('hello')}</main>
			<LanguageChanger />
		</TranslationsProvider>
	);
};

export default Home;
