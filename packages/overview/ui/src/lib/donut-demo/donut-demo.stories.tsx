import type { Meta, StoryObj } from '@storybook/react-vite';
import { DonutDemo } from './donut-demo';

const meta = {
  component: DonutDemo,
  title: 'Overview/Donut Demo',
} satisfies Meta<typeof DonutDemo>;
export default meta;

type Story = StoryObj<typeof DonutDemo>;

export const Primary = {
  args: {},
} satisfies Story;
