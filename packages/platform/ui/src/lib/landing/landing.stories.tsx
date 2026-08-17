import type { Meta, StoryObj } from '@storybook/react-vite';
import { Landing } from './landing';

const meta = {
  component: Landing,
  title: 'Landing',
} satisfies Meta<typeof Landing>;
export default meta;

type Story = StoryObj<typeof Landing>;

export const Primary = {
  args: {},
} satisfies Story;
