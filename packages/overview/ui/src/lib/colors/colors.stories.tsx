import type { Meta, StoryObj } from '@storybook/react-vite';
import { Colors } from './colors';

const meta = {
  component: Colors,
  title: 'Colors',
} satisfies Meta<typeof Colors>;
export default meta;

type Story = StoryObj<typeof Colors>;

export const Primary = {
  args: {},
} satisfies Story;
