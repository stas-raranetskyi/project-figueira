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

const Paragraph = ({ element }: Props) => {
	useSignals();
	const paragraph = (
		<p
			style={{
				...element.styles,
				paddingLeft: element.styles.paddingLeft + 'px',
				paddingRight: element.styles.paddingRight + 'px',
			}}
		>
			{element.attributes.text}
		</p>
	);
	return (
		<div
			onClick={() => selectElement(element)}
			style={{
				outline: editorSelectedElement.value?.id === element.id ? '1px solid #000' : undefined,
			}}
		>
			{element.attributes.text ? paragraph : <div>select element and set text</div>}
		</div>
	);
};

export default Paragraph;
