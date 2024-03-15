/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
'use client';

import { useSignals } from '@preact/signals-react/runtime';
import React from 'react';

import { editorSelectedElement, selectElement } from '@/signals/editor';
import { EditorElement } from '@/types/editor';

type Props = {
	element: EditorElement;
};

const Image = ({ element }: Props) => {
	useSignals();

	const img = (
		<img
			{...element.attributes}
			style={{
				...element.styles,
				paddingLeft: element.styles.paddingLeft + 'px',
				paddingRight: element.styles.paddingRight + 'px',
			}}
		/>
	);

	return (
		<div
			onClick={() => selectElement(element)}
			style={{
				outline: editorSelectedElement.value?.id === element.id ? '1px solid #000' : undefined,
			}}
		>
			{element.attributes.src ? img : <div>select element and set src</div>}
		</div>
	);
};

export default Image;
