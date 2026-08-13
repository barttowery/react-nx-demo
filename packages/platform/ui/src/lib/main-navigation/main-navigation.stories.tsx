import type { Meta, StoryObj } from '@storybook/react-vite';
import { MainNavigation } from './main-navigation';

const meta = {
  component: MainNavigation,
  title: 'Main Navigation',
} satisfies Meta<typeof MainNavigation>;
export default meta;

type Story = StoryObj<typeof MainNavigation>;

export const Primary = {
  args: {},
} satisfies Story;
