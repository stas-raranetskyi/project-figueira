'use client';

import { useDroppable } from '@dnd-kit/core';
import React from 'react';

import Element from '@/features/editor/EmailElement';
import { EditorElement } from '@/types/editor';

type Props = {
	element: EditorElement;
};

const EmailCell = ({ element }: Props) => {
	const { isOver, setNodeRef } = useDroppable({
		id: element.id,
		data: element,
	});

	return (
		<table
			style={{
				width: '100%',
			}}
		>
			<tbody>
				<tr>
					<td
						style={{
							...element.styles,
						}}
					>
						{element.children.map((el) => (
							<Element element={el} key={el.id} />
						))}
					</td>
				</tr>
				<tr>
					<td
						rowSpan={element.children.length}
						style={{
							color: isOver ? 'red' : undefined,
						}}
						ref={setNodeRef}
					>
						DROP TO CELL
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default EmailCell;
