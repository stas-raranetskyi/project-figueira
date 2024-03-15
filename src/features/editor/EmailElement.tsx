'use client';
import loadable from '@loadable/component';
import React, { Suspense } from 'react';

import { EditorElement, ElementTypeEnum } from '@/types/editor';

type Props = {
	element: EditorElement;
};

const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

const emailElements = [ElementTypeEnum.EMAIL_ROOT, ElementTypeEnum.EMAIL_ROW, ElementTypeEnum.EMAIL_CELL];

const ElementBody = loadable(
	(props: Props) => {
		if (emailElements.includes(props.element.type as ElementTypeEnum)) {
			return import(`./emailElements/${capitalizeFirstLetter(props.element.type)}`).catch(() => ({
				default: () => null,
			}));
		}
		return import(`./commonElements/${capitalizeFirstLetter(props.element.type)}`).catch(() => ({
			default: () => null,
		}));
	},
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
