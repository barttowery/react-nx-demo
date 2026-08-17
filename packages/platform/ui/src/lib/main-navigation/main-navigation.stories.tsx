import type { Meta, StoryObj } from '@storybook/react-vite';
import { MainNavigation } from './main-navigation';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  component: MainNavigation,
  title: 'Main Navigation',
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof MainNavigation>;
export default meta;

type Story = StoryObj<typeof MainNavigation>;

export const Primary = {
  args: {},
} satisfies Story;
