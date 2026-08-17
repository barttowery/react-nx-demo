import type { Meta, StoryObj } from '@storybook/react-vite';
import { NavigationSheet } from './navigation-sheet';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  component: NavigationSheet,
  title: 'Navigation Sheet',
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof NavigationSheet>;
export default meta;

type Story = StoryObj<typeof NavigationSheet>;

export const Primary = {
  args: {},
} satisfies Story;
