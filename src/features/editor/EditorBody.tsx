'use client';
import { useSignals } from '@preact/signals-react/runtime';
import React from 'react';

import Element from '@/features/editor/EmailElement';
import { editorElements } from '@/signals/editor';

const EditorBody = () => {
	useSignals();
	return (
		<div style={{ flex: '100%', border: '1px solid' }}>
			{editorElements.value.map((el) => (
				<Element element={el} key={el.id} />
			))}
		</div>
	);
};

export default EditorBody;
