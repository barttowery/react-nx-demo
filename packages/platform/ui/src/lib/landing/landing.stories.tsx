import type { Meta, StoryObj } from '@storybook/react-vite';
import { Landing } from './landing';
import { expect } from 'storybook/test';

const meta = {
  component: Landing,
  title: 'Landing',
} satisfies Meta<typeof Landing>;
export default meta;

type Story = StoryObj<typeof Landing>;

export const Primary = {
  args: {},
} satisfies Story;

export const Heading = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Landing/gi)).toBeTruthy();
  },
} satisfies Story;
