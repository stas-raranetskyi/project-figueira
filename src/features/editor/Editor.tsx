'use client';

import { DndContext, DragEndEvent, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import React, { useId } from 'react';

import EditorBody from '@/features/editor/EditorBody';
import EditorHeader from '@/features/editor/EditorHeader';
import EditorSidebar from '@/features/editor/EditorSidebar';
import { addElement } from '@/signals/editor';
import { ElementTypeEnum } from '@/types/editor';

const Editor = () => {
	const mouseSensor = useSensor(MouseSensor, {
		activationConstraint: {
			distance: 5,
		},
	});
	const touchSensor = useSensor(TouchSensor, {
		activationConstraint: {
			distance: 5,
		},
	});

	const sensors = useSensors(mouseSensor, touchSensor);

	const handleDragEnd = (event: DragEndEvent) => {
		if (event.over === null) {
			return;
		}
		if (event.active.data.current?.type === ElementTypeEnum.EMAIL_CELL && event.over.data.current?.type !== ElementTypeEnum.EMAIL_ROW) return;
		addElement(event.over.id as string, event.active.data.current?.type);
	};

	const id = useId();

	return (
		<DndContext onDragEnd={handleDragEnd} sensors={sensors} id={id}>
			<EditorHeader />
			<div
				style={{
					display: 'flex',
				}}
			>
				<EditorBody />
				<EditorSidebar />
			</div>
		</DndContext>
	);
};

export default Editor;
