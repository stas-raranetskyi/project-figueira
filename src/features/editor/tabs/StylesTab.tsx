'use client';
import { useSignals } from '@preact/signals-react/runtime';
import React from 'react';

import { editorSelectedElement, updateElement } from '@/signals/editor';
import { ElementStyles } from '@/types/editor';

const StylesTab = () => {
	useSignals();

	const handleChange = (style: keyof ElementStyles) => (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!editorSelectedElement.value) return;
		updateElement(editorSelectedElement.value.id, {
			styles: {
				[style]: e.target.value,
			},
		});
	};
	if (!editorSelectedElement.value) return null;
	return (
		<div>
			paddingLeft: <input type="text" value={editorSelectedElement.value.styles.paddingLeft || ''} onChange={handleChange('paddingLeft')} />
			paddingRight: <input type="text" value={editorSelectedElement.value.styles.paddingRight || ''} onChange={handleChange('paddingRight')} />
		</div>
	);
};

export default StylesTab;
