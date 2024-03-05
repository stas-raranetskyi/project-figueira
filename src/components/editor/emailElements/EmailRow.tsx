'use client';

import React from 'react';

import Element from '@/components/editor/EmailElement';
import { withDroppable } from '@/components/editor/withDroppable';
import { EditorElement } from '@/signals/editor';

type Props = {
	element: EditorElement<HTMLDivElement>;
	isOver?: boolean;
	setNodeRef?(element: HTMLElement | null): void;
};

const EmailRow = ({ element, isOver, setNodeRef }: Props) => {
	return (
		<table
			style={{
				color: isOver ? 'red' : undefined,
				...element.styles,
			}}
			ref={setNodeRef}
		>
			<tr>
				ROW
				{element.children.map((el) => (
					<Element element={el} key={el.id} />
				))}
			</tr>
		</table>
	);
};

export default withDroppable(EmailRow);
