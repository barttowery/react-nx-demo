import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { Toggle } from './toggle';
import { BookmarkIcon } from 'lucide-react';

/** Toggle - Displays a toggle component with an on or off state */
const meta = {
  component: Toggle,
  title: 'Components/Toggle',
} satisfies Meta<typeof Toggle>;
export default meta;

type Story = StoryObj<typeof Toggle>;

/** Default toggle - Displays a default toggle */
export const Primary = {
  tags: ['!test'],
  args: {
    size: 'sm',
    variant: 'outline',
    children: (
      <>
        <BookmarkIcon className="group-data-[state=on]/toggle:fill-foreground" />
        Bookmark
      </>
    ),
  },
} satisfies Story;

/** Size - The `size` prop controls the size of the toggle, choices are 'default', 'sm', and 'lg' */
export const Size = {
  tags: ['!test'],
  render: (args) => {
    return (
      <div className="flex flex-wrap items-center gap-2">
        <Toggle variant="outline" aria-label="Toggle small" size="sm">
          Small
        </Toggle>
        <Toggle variant="outline" aria-label="Toggle default" size="default">
          Default
        </Toggle>
        <Toggle variant="outline" aria-label="Toggle large" size="lg">
          Large
        </Toggle>
      </div>
    );
  }
} satisfies Story;

/** Disabled - The `disabled` prop controls whether the toggle is disabled */
export const Disabled = {
  tags: ['!test'],
  render: (args) => {
    return (
      <div className="flex flex-wrap items-center gap-2">
        <Toggle aria-label="Toggle disabled" disabled>
          Disabled
        </Toggle>
        <Toggle variant="outline" aria-label="Toggle disabled outline" disabled>
          Disabled
        </Toggle>
      </div>
    );
  }
} satisfies Story;

/** Toggle Primary Visual - Verifies the toggle component renders correctly */
export const PrimaryVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    size: 'sm',
    variant: 'outline',
    children: (
      <>
        <BookmarkIcon className="group-data-[state=on]/toggle:fill-foreground" />
        Bookmark
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button')).toBeInTheDocument();
    await expect(canvas.getByText(/bookmark/i)).toBeInTheDocument();
  },
} satisfies Story;
