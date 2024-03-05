'use client';

import { useDraggable } from '@dnd-kit/core';
import React, { PropsWithChildren } from 'react';

import { ElementTypeEnum } from '@/signals/editor';

// import { EditorElement, ElementTypeEnum } from '@/signals/editor';

type Props = {
	// element: EditorElement<ElementTypeEnum.TEXT>;
};

const TextElement = ({ children }: PropsWithChildren<Props>) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: 'draggable',
		data: {
			type: ElementTypeEnum.EMAIL_ROW,
		},
	});
	const style = transform
		? {
				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
			}
		: undefined;
	return (
		<button ref={setNodeRef} style={style} {...listeners} {...attributes}>
			Button
		</button>
	);
};

export default TextElement;
