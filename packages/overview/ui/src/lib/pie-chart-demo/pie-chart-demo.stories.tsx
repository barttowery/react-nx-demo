import type { Meta, StoryObj } from '@storybook/react-vite';
import { PieChartDemo } from './pie-chart-demo';

const meta = {
  component: PieChartDemo,
  title: 'Overview/Pie Chart Demo',
} satisfies Meta<typeof PieChartDemo>;
export default meta;

type Story = StoryObj<typeof PieChartDemo>;

export const Primary = {
  args: {},
} satisfies Story;
