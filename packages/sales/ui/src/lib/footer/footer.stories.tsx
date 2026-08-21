import type { Meta, StoryObj } from '@storybook/react-vite';
import { Footer } from './footer';
import { footerDataMock } from '@react-nx-demo/sales-mocks';

const meta = {
  component: Footer,
  title: 'Footer',
} satisfies Meta<typeof Footer>;
export default meta;

type Story = StoryObj<typeof Footer>;

export const Primary = {
  args: {
    footerSections: footerDataMock
  },
} satisfies Story;
