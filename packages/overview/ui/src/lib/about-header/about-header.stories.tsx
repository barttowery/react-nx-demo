import type { Meta, StoryObj } from '@storybook/react-vite';
import { AboutHeader } from './about-header';

const meta = {
  component: AboutHeader,
  title: 'About/Header',
} satisfies Meta<typeof AboutHeader>;
export default meta;

type Story = StoryObj<typeof AboutHeader>;

export const Primary = {
  args: {},
} satisfies Story;
