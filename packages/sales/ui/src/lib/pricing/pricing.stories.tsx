import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pricing } from './pricing';
import { pricingDataMock } from '@react-nx-demo/sales-mocks';

const meta = {
  component: Pricing,
  title: 'Pricing',
} satisfies Meta<typeof Pricing>;
export default meta;

type Story = StoryObj<typeof Pricing>;

export const Primary = {
  args: {
    pricingData: pricingDataMock
  },
} satisfies Story;
