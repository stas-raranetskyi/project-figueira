'use client';

import { useDroppable } from '@dnd-kit/core';
import React from 'react';

import Element from '@/features/editor/EmailElement';
import { EditorElement } from '@/types/editor';

type Props = {
	element: EditorElement;
};

const EmailRoot = ({ element }: Props) => {
	const { isOver, setNodeRef } = useDroppable({
		id: element.id,
		data: element,
	});

	return (
		<table
			style={{
				width: '100%',
				borderCollapse: 'collapse',
				borderSpacing: 0,
			}}
		>
			<tbody>
				<tr>
					<td
						style={{
							fontSize: 0,
							verticalAlign: 'top',
						}}
					>
						&nbsp;
					</td>
					<td
						width="600"
						style={{
							...element.styles,
							width: '600px',
							maxWidth: '600px',
							alignItems: 'center',
							verticalAlign: 'top',
							padding: 0,
						}}
					>
						{element.children.map((el) => (
							<Element element={el} key={el.id} />
						))}
						<div
							ref={setNodeRef}
							style={{
								color: isOver ? 'red' : 'black',
							}}
						>
							DROP TO ROOT
						</div>
					</td>
					<td
						style={{
							fontSize: 0,
							verticalAlign: 'top',
						}}
					>
						&nbsp;
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default EmailRoot;
