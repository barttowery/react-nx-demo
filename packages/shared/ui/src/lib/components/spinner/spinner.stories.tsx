import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { Spinner } from './spinner';

/** Spinner - An indicator that can be used to show a loading state */
const meta = {
  component: Spinner,
  title: 'Components/Spinner',
} satisfies Meta<typeof Spinner>;
export default meta;

type Story = StoryObj<typeof Spinner>;

/** Primary spinner - Displays a primary spinner. Classes can be set to size or center. */
export const Primary = {
  tags: ['!test'],
  args: {
    className: 'size-4',
  },
} satisfies Story;

/** Spinner Primary Visual - Verifies the spinner component renders correctly */
export const PrimaryVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    className: 'size-4',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('status')).toBeInTheDocument();
  },
} satisfies Story;
