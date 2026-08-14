import type { Meta, StoryObj } from '@storybook/react-vite';
import { ShippingAddress } from './shipping-address';
import { expect } from 'storybook/test';

const meta = {
  component: ShippingAddress,
  title: 'ShippingAddress',
} satisfies Meta<typeof ShippingAddress>;
export default meta;

type Story = StoryObj<typeof ShippingAddress>;

export const Primary = {
  args: {},
} satisfies Story;

export const Heading = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/ShippingAddress/gi)).toBeTruthy();
  },
} satisfies Story;
