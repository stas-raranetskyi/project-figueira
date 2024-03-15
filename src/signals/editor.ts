import { effect, signal } from '@preact/signals-react';

import { DeviceEnum, EditorElement, ElementId, ElementStyles, ElementTypeEnum } from '@/types/editor';
import { addAnElement, createElementByType, updateAnElement } from '@/utils/editor';

type HistoryState = {
	history: EditorElement[];
	currentIndex: number;
};

type EditorSettings = {
	device: DeviceEnum;
	previewMode: boolean;
};

export const editorElements = signal<EditorElement[]>([
	createElementByType(ElementTypeEnum.EMAIL_ROOT, [
		createElementByType(ElementTypeEnum.EMAIL_ROW, [
			createElementByType(ElementTypeEnum.EMAIL_CELL, [
				createElementByType(ElementTypeEnum.IMAGE),
				createElementByType(ElementTypeEnum.PARAGRAPH),
			]),
		]),
	]),
]);

export const editorHistory = signal<HistoryState>({
	history: [],
	currentIndex: -1,
});

export const editorSettings = signal<EditorSettings>({
	device: DeviceEnum.DESKTOP,
	previewMode: false,
});

export const editorSelectedElement = signal<EditorElement | undefined>(undefined);

export const addElement = (targerId: ElementId, elementType?: ElementTypeEnum) => {
	if (!elementType) return;
	editorElements.value = addAnElement(editorElements.value, targerId, createElementByType(elementType));
};

export const updateElement = (id: ElementId, elementData: Partial<EditorElement>) => {
	editorElements.value = updateAnElement(editorElements.value, id, elementData);
	if (editorSelectedElement.value) editorSelectedElement.value = updateAnElement([editorSelectedElement.value], id, elementData)[0];
};

export const selectElement = (element: EditorElement) => {
	editorSelectedElement.value = editorSelectedElement.value?.id === element.id ? undefined : element;
};
