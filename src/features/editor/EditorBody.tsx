'use client';
import React from 'react';

import Element from '@/components/editor/EmailElement';
import { editor } from '@/signals/editor';

const EditorBody = () => {
	return (
		<div style={{ flex: '100%', border: '1px solid' }}>
			{editor.value.state.elements.map((el) => (
				<Element element={el} key={el.id} />
			))}
		</div>
	);
};

export default EditorBody;
