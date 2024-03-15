/* eslint-disable jsx-a11y/alt-text */
'use client';
import React, { useState } from 'react';

import BlocksTab from './tabs/BlocksTab';
import SettingsTab from './tabs/SettingsTab';
import StylesTab from './tabs/StylesTab';

type Tab = 'blocks' | 'settings' | 'styles';

const EditorSidebar = () => {
	const [tab, setTab] = useState<Tab>('styles');
	return (
		<div style={{ width: 300, padding: 5 }}>
			<div>
				<button onClick={() => setTab('blocks')}>Blocks</button>
				<button onClick={() => setTab('settings')}>Settings</button>
				<button onClick={() => setTab('styles')}>Styles</button>
			</div>
			{tab === 'blocks' && <BlocksTab />}
			{tab === 'settings' && <SettingsTab />}
			{tab === 'styles' && <StylesTab />}
		</div>
	);
};

export default EditorSidebar;
