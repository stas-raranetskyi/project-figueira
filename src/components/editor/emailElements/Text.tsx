'use client';

import React from 'react';

import Element from '@/components/editor/EmailElement';
import { withDroppable } from '@/components/editor/withDroppable';
import { EditorElement } from '@/signals/editor';

type Props = {
	element: EditorElement<HTMLDivElement>;
	isOver?: boolean;
};

const TextElement = ({ element, isOver }: Props) => {
	return (
		<div
			style={{
				color: isOver ? 'red' : undefined,
				padding: '2px',
				border: '1px dashed #ccc',
			}}
		>
			{element.type}
			{element.children.map((el) => (
				<Element element={el} key={el.id} />
			))}
		</div>
	);
};

export default withDroppable(TextElement);
