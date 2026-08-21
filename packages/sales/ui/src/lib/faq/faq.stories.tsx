import type { Meta, StoryObj } from '@storybook/react-vite';
import { Faq } from './faq';
import { faqDataMock } from '@react-nx-demo/sales-mocks';

const meta = {
  component: Faq,
  title: 'FAQs',
} satisfies Meta<typeof Faq>;
export default meta;

type Story = StoryObj<typeof Faq>;

export const Primary = {
  args: {
    faqData: faqDataMock
  },
} satisfies Story;
