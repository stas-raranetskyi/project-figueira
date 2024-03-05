'use client';

import { DragEndEvent, useDroppable } from '@dnd-kit/core';
import { NextPage } from 'next';
import React from 'react';

import { EditorElement } from '@/signals/editor';

export type Props<T> = {
	element: EditorElement<T>;
	isOver?: boolean;
	setNodeRef?(element: HTMLElement | null): void;
};

export const withDroppable = <T,>(WrappedComponent: React.ComponentType<Props<T>>) => {
	const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

	const ComponentWithTheme = (props: React.PropsWithChildren<Props<T>>) => {
		const { isOver, setNodeRef } = useDroppable({
			id: props.element.id,
			data: props.element,
		});

		return <WrappedComponent {...props} isOver={isOver} setNodeRef={setNodeRef} />;
	};

	ComponentWithTheme.displayName = `withDroppable(${displayName})`;

	return ComponentWithTheme;
};
