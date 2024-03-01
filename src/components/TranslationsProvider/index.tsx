'use client';

import { createInstance } from 'i18next';
import { NextPage } from 'next';
import { FC } from 'react';
import React from 'react';
import { I18nextProvider } from 'react-i18next';

import { useClientLocale } from '@/hooks/useClientLocale';
import { initTranslations } from '@/utils/i18n';

import { Props } from './types';

const TranslationsProvider: FC<Props> = ({ children, locale, namespaces, resources }) => {
	const clientLocale = useClientLocale();
	locale = locale || clientLocale;
	const i18n = createInstance();

	initTranslations(locale, namespaces, i18n, resources);

	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export const withTranslationsProvider = (WrappedComponent: React.ComponentType | NextPage<any>, namespaces: string[]) => {
	const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

	const ComponentWithTheme = (props: any) => {
		return (
			<TranslationsProvider namespaces={namespaces}>
				<WrappedComponent {...props} />
			</TranslationsProvider>
		);
	};

	ComponentWithTheme.displayName = `withTranslationsProvider(${displayName})`;

	return ComponentWithTheme;
};

export default TranslationsProvider;
