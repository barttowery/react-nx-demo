import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './badge';
import { BadgeCheck, BookmarkIcon } from 'lucide-react';
import { Spinner } from '../spinner/spinner';

/** Badge - Displays a badge component or icon */
const meta = {
  component: Badge,
  title: 'Components/Badge',
} satisfies Meta<typeof Badge>;
export default meta;

type Story = StoryObj<typeof Badge>;

/** Default badge - Displays a default badge */
export const Primary = {
  args: {
    children: 'Default Badge',
  },
} satisfies Story;

/** Secondary badge - Displays a secondary badge */
export const Secondary = {
  args: {
    children: 'Secondary Badge',
    variant: 'secondary',
  },
} satisfies Story;

/** Destructive badge - Displays a destructive badge */
export const Destructive = {
  args: {
    children: 'Destructive Badge',
    variant: 'destructive',
  },
} satisfies Story;

/** Outline badge - Displays an outline badge */
export const Outline = {
  args: {
    children: 'Outline Badge',
    variant: 'outline',
  },
} satisfies Story;

/** Ghost badge - Displays a ghost badge */
export const Ghost = {
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
        <BadgeCheck data-icon="inline-start" />
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
