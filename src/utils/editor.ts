import { v4 as uuid } from 'uuid';

import { EditorElement, ElementAttributes, ElementId, ElementStyles, ElementTypeEnum } from '@/types/editor';

const elementFactory = (
	type: ElementTypeEnum,
	attributes: ElementAttributes = {},
	styles: React.CSSProperties = {},
	children: EditorElement[] = [],
): EditorElement => {
	return {
		id: uuid(),
		children,
		styles,
		type,
		attributes,
	};
};

export const createElementByType = (type: ElementTypeEnum, children: EditorElement[] = []): EditorElement => {
	switch (type) {
		case ElementTypeEnum.EMAIL_ROW:
			return elementFactory(
				type,
				{},
				{
					width: '100%',
				},
				children,
			);
		case ElementTypeEnum.EMAIL_CELL:
			return elementFactory(
				type,
				{},
				{
					width: '100%',
				},
				children,
			);
		case ElementTypeEnum.EMAIL_ROOT:
			return elementFactory(
				type,
				{},
				{
					width: '600px',
					borderSpacing: 0,
					maxWidth: '600px',
					margin: '0 auto',
				},
				[createElementByType(ElementTypeEnum.EMAIL_ROW), ...children],
			);
		default:
			return elementFactory(type, {}, {}, children);
	}
};

export const addAnElement = (elements: EditorElement[], targerId: ElementId, el: EditorElement): EditorElement[] => {
	let found = false;
	return elements.map((element) => {
		if (element.id === targerId) {
			found = true;
			return {
				...element,
				children: [...element.children, el],
			};
		}
		if (element.children.length && !found) {
			return {
				...element,
				children: addAnElement(element.children, targerId, el),
			};
		}
		return element;
	});
};

export const updateAnElement = (elements: EditorElement[], id: ElementId, elementData: Partial<EditorElement>): EditorElement[] => {
	let found = false;
	return elements.map((element) => {
		if (element.id === id) {
			found = true;
			return {
				...element,
				styles: {
					...element.styles,
					...elementData.styles,
				},
				attributes: {
					...element.attributes,
					...elementData.attributes,
				},
			};
		}
		if (element.children.length && !found) {
			return {
				...element,
				children: updateAnElement(element.children, id, elementData),
			};
		}
		return element;
	});
};
