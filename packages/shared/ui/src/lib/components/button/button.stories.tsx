import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';
import { expect, userEvent, within } from 'storybook/test';

const meta = {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'outline', 'ghost', 'secondary', 'destructive', 'link'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['default', 'xs', 'sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg'],
      },
    },
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof Button>;

/** Base primary story (uses default variant) */
export const Primary = {
  tags: ['!test'],
  args: {
    children: 'Primary Button',
  },
} satisfies Story;

/** Default story explicitly sets variant to 'default' - Used for normal primary actions such as a save or OK */
export const Default = {
  tags: ['!test'],
  args: {
    variant: 'default',
    children: 'Default Variant',
  },
} satisfies Story;

/** Outline button - Used for secondary actions, such as a cancel */
export const Outline = {
  tags: ['!test'],
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
} satisfies Story;

/** Ghost button - Used for subtle actions, such as a link */
export const Ghost = {
  tags: ['!test'],
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
} satisfies Story;

/** Secondary button - Used for a secondary button that isn't the default function */
export const Secondary = {
  tags: ['!test'],
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
} satisfies Story;

/** Destructive button - Used when action will cause data distruction (delete) or needs a warning */
export const Destructive = {
  tags: ['!test'],
  args: {
    variant: 'destructive',
    children: 'Destructive Button',
  },
} satisfies Story;

/** Disabled button - Used when the button is disabled */
export const Disabled = {
  tags: ['!test'],
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
} satisfies Story;

/** Small size button - used if space is at a premium */
export const SmallSize = {
  tags: ['!test'],
  args: {
    size: 'sm',
    children: 'Small Button',
  },
} satisfies Story;

/** Large size button - used if the button needs extra emphasis */
export const LargeSize = {
  tags: ['!test'],
  args: {
    size: 'lg',
    children: 'Large Button',
  },
} satisfies Story;

/** With an Icon - if an icon helps with the meaning of the button */
export const WithIcon = {
  tags: ['!test'],
  args: {
    children: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
        Button with Icon
      </>
    ),
  },
} satisfies Story;

/** Icon button with no text */
export const IconButton = {
  tags: ['!test'],
  args: {
    size: 'icon',
    'aria-label': 'Icon Button',
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    ),
  },
} satisfies Story;


/** Ghost Icon button with no text and no borders */
export const GhostIcon = {
  tags: ['!test'],
  args: {
    size: 'icon',
    variant: 'ghost',
    'aria-label': 'Ghost Icon Button',
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    ),
  },
} satisfies Story;

export const DefaultVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    variant: 'default',
    children: 'Default Variant',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /Default Variant/i });
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveClass('bg-primary');
    await expect(button).toHaveClass('text-primary-foreground');
  },
} satisfies Story;

export const OutlineVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /Outline Button/i });
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveClass('border-border');
  },
} satisfies Story;

export const GhostVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /Ghost Button/i });
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveClass('hover:bg-muted');
  },
} satisfies Story;

export const SecondaryVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /Secondary Button/i });
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveClass('bg-secondary');
    await expect(button).toHaveClass('text-secondary-foreground');
  },
} satisfies Story;

export const DestructiveVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    variant: 'destructive',
    children: 'Destructive Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /Destructive Button/i });
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveClass('bg-destructive');
    await expect(button).toHaveClass('text-primary-foreground');
  },
} satisfies Story;

export const DisabledVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /Disabled Button/i });
    await expect(button).toBeInTheDocument();
    await expect(button).toBeDisabled();
    await expect(button).toHaveClass('disabled:pointer-events-none');
    await expect(button).toHaveClass('disabled:opacity-50');
  },
} satisfies Story;

export const LinkVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    variant: 'link',
    children: 'Link Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /Link Button/i });
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveClass('text-primary');
    await expect(button).toHaveClass('underline-offset-4');
  },
} satisfies Story;

export const SmallSizeVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    size: 'sm',
    children: 'Small Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /Small Button/i });
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveClass('h-7');
    await expect(button).toHaveClass('text-[0.8rem]');
  },
} satisfies Story;

export const LargeSizeVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    size: 'lg',
    children: 'Large Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /Large Button/i });
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveClass('h-9');
  },
} satisfies Story;

export const IconSizeVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    size: 'icon',
    'aria-label': 'Icon Button',
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveClass('size-8');
  },
} satisfies Story;

export const ClickInteraction: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    children: 'Click Me',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /Click Me/i });
    
    // Check initial state
    await expect(button).toBeInTheDocument();
    
    // Simulate click
    await userEvent.click(button);
    
    // Button should still be in the document after click
    await expect(button).toBeInTheDocument();
  },
} satisfies Story;
