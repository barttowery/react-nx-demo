import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChatDemo } from './chat-demo';

const meta = {
  component: ChatDemo,
  title: 'Overview/Chat Demo',
} satisfies Meta<typeof ChatDemo>;
export default meta;

type Story = StoryObj<typeof ChatDemo>;

export const Primary = {
  args: {},
} satisfies Story;
