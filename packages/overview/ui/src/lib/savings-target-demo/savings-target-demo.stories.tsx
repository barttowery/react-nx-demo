import type { Meta, StoryObj } from '@storybook/react-vite';
import { SavingsTargetDemo } from './savings-target-demo';

const meta = {
  component: SavingsTargetDemo,
  title: 'Overview/Savings Target Demo',
} satisfies Meta<typeof SavingsTargetDemo>;
export default meta;

type Story = StoryObj<typeof SavingsTargetDemo>;

export const Primary = {
  args: {},
} satisfies Story;
