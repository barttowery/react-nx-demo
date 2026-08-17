import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChartDemo } from './bar-chart-demo';

const meta = {
  component: BarChartDemo,
  title: 'Bar Chart Demo',
} satisfies Meta<typeof BarChartDemo>;
export default meta;

type Story = StoryObj<typeof BarChartDemo>;

export const Primary = {
  args: {},
} satisfies Story;
