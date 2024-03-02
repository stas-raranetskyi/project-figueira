import type { Meta, StoryObj } from '@storybook/react';

import LanguageChanger from '.';

const meta = {
	title: 'Example/Button',
	component: LanguageChanger,
	parameters: {
		layout: 'centered',
		nextjs: {
			appDirectory: true,
		},
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof LanguageChanger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		primary: true,
		label: 'LanguageChanger',
	},
};
