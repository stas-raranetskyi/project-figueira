import { signal } from '@preact/signals-react';
import React from 'react';

import { createElementByType } from '@/utils/editor';

enum DeviceEnum {
	DESKTOP = 'Desktop',
	MOBILE = 'Mobile',
	TABLET = 'Tablet',
}

export enum ElementTypeEnum {
	TEXT = 'text',
	EMAIL_ROW = 'emailRow',
	// TODO add more types
	// ...
}

export type ElementAttributesType<T> = React.HTMLProps<T> & React.HTMLAttributes<T>;
export type ElementAttributes<T> = Omit<ElementAttributesType<T>, 'style'>;

export type EditorElement<T = HTMLElement> = {
	id: string;
	styles: React.CSSProperties;
	type: ElementTypeEnum;
	attributes: ElementAttributes<T>;
	children: EditorElement<T>[];
};

type Editor = {
	elements: EditorElement[];
	selectedElement?: EditorElement;
	device: DeviceEnum;
	previewMode: boolean;
};

type HistoryState = {
	history: Editor[];
	currentIndex: number;
};

type EditorState = {
	state: Editor;
	history: HistoryState;
};

export const editor = signal<EditorState>({
	state: {
		elements: [createElementByType(ElementTypeEnum.EMAIL_ROW)],
		device: DeviceEnum.DESKTOP,
		previewMode: false,
	},
	history: {
		history: [],
		currentIndex: -1,
	},
});

const addAnElement = (elements: EditorElement[], targerId: EditorElement['id'], el: EditorElement) => {
	for (const element of elements) {
		if (element.id === targerId) {
			element.children.push(el);
			return;
		}
		if (element.children.length) {
			addAnElement(element.children, targerId, el);
		}
	}
};

export const addElement = (targerId: EditorElement['id'], elementType?: ElementTypeEnum) => {
	if (!elementType) return;
	addAnElement(editor.value.state.elements, targerId, createElementByType(elementType));
};
