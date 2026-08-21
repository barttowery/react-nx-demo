import type { Meta, StoryObj } from '@storybook/react-vite';
import { CallToAction } from './call-to-action';

const meta = {
  component: CallToAction,
  title: 'Call To Action',
} satisfies Meta<typeof CallToAction>;
export default meta;

type Story = StoryObj<typeof CallToAction>;

export const Primary = {
  args: {},
} satisfies Story;
