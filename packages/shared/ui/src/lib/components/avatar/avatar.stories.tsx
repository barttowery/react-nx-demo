import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, AvatarImage, AvatarFallback, AvatarBadge } from './avatar';
import { PlusIcon } from 'lucide-react';

/** Avatar - An image element with a fallback for representing the user. */
const meta = {
  component: Avatar,
  title: 'Components/Avatar',
} satisfies Meta<typeof Avatar>;
export default meta;

type Story = StoryObj<typeof Avatar>;

/** Primary - A basic avatar with an image. */
export const Primary = {
  tags: ['!test'],
  args: {
    children: (
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        className="grayscale"
      />
    )
  },
} satisfies Story;

/** Badge - Use the `AvatarBadge` component to add a badge to the avatar. The badge is positioned at the bottom right of the avatar. */
export const Badge = {
  tags: ['!test'],
  args: {
    children: (
      <>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
        <AvatarBadge className="bg-green-600 dark:bg-green-800" />
      </>
    )
  },
} satisfies Story;

/** Badge with Icon - use an icon inside `AvatarBadge`. */
export const BadgeWithIcon = {
  tags: ['!test'],
  args: {
    className: 'greyscale',
    children: (
      <>
        <AvatarImage src="https://github.com/pranathip.png" alt="@pranathip" />
        <AvatarFallback>PP</AvatarFallback>
        <AvatarBadge>
          <PlusIcon />
        </AvatarBadge>
      </>
    )
  },
} satisfies Story;

/** Sizes - Use the size prop to change the size of the avatar. */
export const Sizes = {
  tags: ['!test'],
  args: {},
  render: (args) => {
    return (
      <div className="flex flex-wrap items-center gap-2 grayscale">
        <Avatar size="sm">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    );
  },
} satisfies Story;
