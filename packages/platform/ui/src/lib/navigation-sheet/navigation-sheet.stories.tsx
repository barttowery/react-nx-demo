import type { Meta, StoryObj } from '@storybook/react-vite';
import { NavigationSheet } from './navigation-sheet';

const meta = {
  component: NavigationSheet,
  title: 'Navigation Sheet',
} satisfies Meta<typeof NavigationSheet>;
export default meta;

type Story = StoryObj<typeof NavigationSheet>;

export const Primary = {
  args: {},
} satisfies Story;
