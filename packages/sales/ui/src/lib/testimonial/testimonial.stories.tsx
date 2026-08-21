import type { Meta, StoryObj } from '@storybook/react-vite';
import { Testimonial } from './testimonial';

const meta = {
  component: Testimonial,
  title: 'Testimonial',
} satisfies Meta<typeof Testimonial>;
export default meta;

type Story = StoryObj<typeof Testimonial>;

export const Primary = {
  args: {},
} satisfies Story;
