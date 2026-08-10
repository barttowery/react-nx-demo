import type { Meta, StoryObj } from '@storybook/react-vite';
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
  args: {
    className: 'size-4',
  },
} satisfies Story;
