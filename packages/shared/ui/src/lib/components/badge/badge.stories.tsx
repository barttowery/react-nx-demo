import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './badge';
import { BadgeCheck, BookmarkIcon } from 'lucide-react';
import { Spinner } from '../spinner/spinner';
import { expect, within } from 'storybook/test';

/** Badge - Displays a badge component or icon */
const meta = {
  component: Badge,
  title: 'Components/Badge',
} satisfies Meta<typeof Badge>;
export default meta;

type Story = StoryObj<typeof Badge>;

/** Default badge - Displays a default badge */
export const Primary = {
  tags: ['!test'],
  args: {
    children: 'Default Badge',
  },
} satisfies Story;

/** Secondary badge - Displays a secondary badge */
export const Secondary = {
  tags: ['!test'],
  args: {
    children: 'Secondary Badge',
    variant: 'secondary',
  },
} satisfies Story;

/** Destructive badge - Displays a destructive badge */
export const Destructive = {
  tags: ['!test'],
  args: {
    children: 'Destructive Badge',
    variant: 'destructive',
  },
} satisfies Story;

/** Outline badge - Displays an outline badge */
export const Outline = {
  tags: ['!test'],
  args: {
    children: 'Outline Badge',
    variant: 'outline',
  },
} satisfies Story;

/** Ghost badge - Displays a ghost badge */
export const Ghost = {
  tags: ['!test'],
  args: {
    children: 'Ghost Badge',
    variant: 'ghost',
  },
} satisfies Story;

/** Badge With Icon - Displays a badge with an icon */
export const WithIcon = {
  tags: ['!test'],
  args: {
    children: (
      <>
        <BadgeCheck role="img" data-icon="inline-start" />
        With Icon Badge
      </>
    ),
    variant: 'secondary',
  },
} satisfies Story;

/** Badge With IconAfter - Displays a badge with an icon after the text */
export const WithIconAfter = {
  tags: ['!test'],
  args: {
    children: (
      <>
        With Icon Badge
        <BookmarkIcon data-icon="inline-end" />
      </>
    ),
    variant: 'secondary',
  },
} satisfies Story;


/** Badge With Spinner - Displays a badge with a spinner */
export const WithSpinner = {
  tags: ['!test'],
  args: {
    children: (
      <>
        <Spinner data-icon="inline-start" />
        With Spinner
      </>
    ),
    variant: 'secondary',
  },
} satisfies Story;

/** Badge Default Visual - Verifies default badge renders correctly */
export const PrimaryVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    children: 'Default Badge',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText(/Default Badge/i);
    await expect(badge).toBeInTheDocument();
    await expect(badge).toHaveClass('inline-flex items-center justify-center gap-1 px-2 py-0.5 text-xs font-medium bg-primary text-primary-foreground');
  },
} satisfies Story;

/** Badge Secondary Visual - Verifies secondary badge renders correctly */
export const SecondaryVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    children: 'Secondary Badge',
    variant: 'secondary',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText(/Secondary Badge/i);
    await expect(badge).toBeInTheDocument();
    await expect(badge).toHaveClass('bg-secondary text-secondary-foreground');
  },
} satisfies Story;

/** Badge With Icon Visual - Verifies badge with icon renders correctly */
export const WithIconVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    children: (
      <>
        <BadgeCheck data-icon="inline-start" />
        With Icon Badge
      </>
    ),
    variant: 'secondary',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText(/With Icon Badge/i);
    await expect(badge).toBeInTheDocument();
  },
} satisfies Story;
