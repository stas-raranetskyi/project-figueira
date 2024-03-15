'use client';

import { DragOverlay, useDraggable } from '@dnd-kit/core';
import React, { PropsWithChildren } from 'react';

import { ElementTypeEnum } from '@/signals/editor';

type Props = {
	type: ElementTypeEnum;
};

const Block: React.FC<PropsWithChildren<Props>> = ({ type }) => {
	const id = 'draggable' + type;
	const { attributes, listeners, setNodeRef, active } = useDraggable({
		id,
		data: {
			type,
		},
	});

	const content = <button>{type}</button>;

	return (
		<>
			<div
				ref={setNodeRef}
				style={{
					cursor: 'grab',
				}}
				{...listeners}
				{...attributes}
			>
				{content}
			</div>
			{active?.id === id && (
				<DragOverlay zIndex={1000}>
					<div
						style={{
							borderRadius: '8px',
							boxShadow:
								'0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)',
							cursor: 'grabbing',
							display: 'inline-block',
						}}
					>
						{content}
					</div>
				</DragOverlay>
			)}
		</>
	);
};

export default Block;
