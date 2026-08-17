import type { Meta, StoryObj } from '@storybook/react-vite';
import { LoadingExample } from './loading-example';

const meta = {
  component: LoadingExample,
  title: 'Overview/Loading Example',
} satisfies Meta<typeof LoadingExample>;
export default meta;

type Story = StoryObj<typeof LoadingExample>;

export const Primary = {
  args: {},
} satisfies Story;
