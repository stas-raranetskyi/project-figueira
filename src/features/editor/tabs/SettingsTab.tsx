/* eslint-disable jsx-a11y/alt-text */
'use client';
import { useSignals } from '@preact/signals-react/runtime';
import React from 'react';

import { editorSelectedElement, updateElement } from '@/signals/editor';
import { ElementAttributes } from '@/types/editor';

const SettingsTab = () => {
	useSignals();

	const handleChange = (attr: keyof ElementAttributes) => (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!editorSelectedElement.value) return;
		updateElement(editorSelectedElement.value.id, {
			attributes: {
				[attr]: e.target.value,
			},
		});
	};
	if (!editorSelectedElement.value) return null;
	return (
		<div>
			src: <input type="text" value={editorSelectedElement.value.attributes.src || ''} onChange={handleChange('src')} />
			<br />
			text: <input type="text" value={editorSelectedElement.value.attributes.text || ''} onChange={handleChange('text')} />
		</div>
	);
};

export default SettingsTab;
