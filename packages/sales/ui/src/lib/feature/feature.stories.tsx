import type { Meta, StoryObj } from '@storybook/react-vite';
import Feature from './feature';
import { featureDataMock } from '@react-nx-demo/sales-mocks';

const meta = {
  component: Feature,
  title: 'Feature',
} satisfies Meta<typeof Feature>;
export default meta;

type Story = StoryObj<typeof Feature>;

export const Primary = {
  args: {
    featureData: featureDataMock
  },
} satisfies Story;
