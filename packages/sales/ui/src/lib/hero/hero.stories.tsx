import type { Meta, StoryObj } from '@storybook/react-vite';
import HeroSection from './hero';
import { avatarListMock } from '@react-nx-demo/sales-mocks';

const meta = {
  component: HeroSection,
  title: 'Hero',
} satisfies Meta<typeof HeroSection>;
export default meta;

type Story = StoryObj<typeof HeroSection>;

export const Primary = {
  args: {
    avatarList: avatarListMock
  },
} satisfies Story;
