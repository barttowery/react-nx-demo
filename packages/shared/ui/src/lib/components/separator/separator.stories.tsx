import type { Meta, StoryObj } from '@storybook/react-vite';
import { Separator } from './separator';
import { expect, within } from 'storybook/test';

/** Separator - A visual separator used to divide content or sections. Can be horizontal or vertical. */
const meta = {
  component: Separator,
  title: 'Components/Separator',
} satisfies Meta<typeof Separator>;
export default meta;

type Story = StoryObj<typeof Separator>;

/** Default story - Displays a default horizontal separator */
export const Primary = {
  tags: ['!test'],
  args: {},
} satisfies Story;

/** Vertical separator - Displays a vertical separator */
export const Vertical = {
  tags: ['!test'],
  render: (args) => {
    return (
      <div className="flex h-5 items-center gap-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    );
  },
} satisfies Story;

/** Horizontal list with separators - Displays a horizontal list of items with separators */
export const HorizontalList = {
  tags: ['!test'],
  render: (args) => {
    return (
      <div className="flex w-full max-w-sm flex-col gap-2 text-sm">
        <dl className="flex items-center justify-between">
          <dt>Item 1</dt>
          <dd className="text-muted-foreground">Value 1</dd>
        </dl>
        <Separator />
        <dl className="flex items-center justify-between">
          <dt>Item 2</dt>
          <dd className="text-muted-foreground">Value 2</dd>
        </dl>
        <Separator />
        <dl className="flex items-center justify-between">
          <dt>Item 3</dt>
          <dd className="text-muted-foreground">Value 3</dd>
        </dl>
      </div>
    );
  },
} satisfies Story;

/** Separator Horizontal Visual - Verifies horizontal separator renders correctly */
export const PrimaryVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const separator = canvas.getByRole('none');
    await expect(separator).toBeInTheDocument();
    await expect(separator).toHaveClass('shrink-0 bg-border');
  },
} satisfies Story;

/** Separator Vertical Visual - Verifies vertical separator renders correctly */
export const VerticalVisual: Story = {
  tags: ['!dev', '!autodocs'],
  render: (args) => {
    return (
      <div className="flex h-5 items-center gap-4 text-sm">
        <div>Home</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const separators = canvas.getAllByRole('none');
    await expect(separators.length).toBe(2);
    for (const sep of separators) {
      await expect(sep).toBeInTheDocument();
      await expect(sep).toHaveClass('shrink-0 bg-border');
    }
  },
} satisfies Story;
