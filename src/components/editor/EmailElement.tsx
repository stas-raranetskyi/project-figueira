'use client';
import loadable from '@loadable/component';
import React, { Suspense } from 'react';

import { EditorElement } from '@/signals/editor';

type Props = {
	element: EditorElement;
};

const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

const ElementBody = loadable(
	(props: Props) =>
		import(`@/components/editor/emailElements/${capitalizeFirstLetter(props.element.type)}`).catch(() => ({
			default: () => null,
		})),
	{
		cacheKey: (props: Props) => props.element.type,
	},
);

const Element = (props: Props) => {
	return (
		<Suspense fallback={null}>
			<ElementBody {...props} />
		</Suspense>
	);
};

export default Element;
