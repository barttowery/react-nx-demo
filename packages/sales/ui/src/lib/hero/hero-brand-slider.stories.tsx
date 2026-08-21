import type { Meta, StoryObj } from '@storybook/react-vite';
import BrandSlider from './hero-brand-slider';
import { brandListMock } from '@react-nx-demo/sales-mocks';

const meta = {
  component: BrandSlider,
  title: 'Hero Brand Slider',
} satisfies Meta<typeof BrandSlider>;
export default meta;

type Story = StoryObj<typeof BrandSlider>;

export const Primary = {
  args: {
    brandList: brandListMock
  },
} satisfies Story;
