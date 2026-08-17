import type { Meta, StoryObj } from '@storybook/react-vite';
import { About } from './about';

const meta = {
  component: About,
  title: 'About/Full Page',
} satisfies Meta<typeof About>;
export default meta;

type Story = StoryObj<typeof About>;

export const Primary = {
  args: {},
} satisfies Story;
