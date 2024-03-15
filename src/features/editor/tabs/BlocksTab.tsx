/* eslint-disable jsx-a11y/alt-text */
'use client';
import React from 'react';

import Block from '@/features/editor/Block';
import { ElementTypeEnum } from '@/types/editor';

const BlocksTab = () => {
	return (
		<div style={{ border: '1px solid', display: 'flex', padding: 5, flexWrap: 'wrap' }}>
			<Block type={ElementTypeEnum.EMAIL_ROW} />
			<Block type={ElementTypeEnum.EMAIL_CELL} />
			<Block type={ElementTypeEnum.IMAGE} />
			<Block type={ElementTypeEnum.PARAGRAPH} />
		</div>
	);
};

export default BlocksTab;
