import type { Meta, StoryObj } from '@storybook/react-vite';
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from './item';
import { Button } from '../button/button';
import { Checkbox } from '../checkbox/checkbox';
import { Label } from '../label/label';
import { BadgeCheckIcon, ChevronRightIcon, InboxIcon } from 'lucide-react';
import { expect, within } from 'storybook/test';

/** Item - The Item component is a straightforward flex container that can house nearly any type of content. Use it to display a title, description, and actions. Group it with the `ItemGroup` component to create a list of items. Use `Field` if you need to display a form input such as a checkbox, input, radio, or select. If you only need to display content such as a title, description, and actions, use `Item`. */
const meta = {
  component: Item,
  title: 'Components/Item',
} satisfies Meta<typeof Item>;
export default meta;

type Story = StoryObj<typeof Item>;

/** Primary story - Displays a basic item with a title, description, and action button. */
export const Primary = {
  tags: ['!test'],
  args: {},
  render: (args) => {
    return (
      <div className="flex w-full max-w-md flex-col gap-6">
        <Item variant="outline">
          <ItemContent>
            <ItemTitle>Basic Item</ItemTitle>
            <ItemDescription>
              A simple item with title and description.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="sm">
              Action
            </Button>
          </ItemActions>
        </Item>
        <Item variant="outline" size="sm" asChild>
          <a href="https://github.com/barttowery">
          <ItemMedia>
            <BadgeCheckIcon className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Your profile has been verified.</ItemTitle>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
          </a>
        </Item>
      </div>
    );
  },
} satisfies Story;

/** Variant - Use the `variant` prop to change the visual style of the item. */
export const Variant = {
  tags: ['!test'],
  args: {},
  render: (args) => {
    return (
      <div className="flex w-full max-w-md flex-col gap-6">
        <Item>
          <ItemMedia variant="icon">
            <InboxIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Default Variant</ItemTitle>
            <ItemDescription>
              Transparent background with no border.
            </ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline">
          <ItemMedia variant="icon">
            <InboxIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Outline Variant</ItemTitle>
            <ItemDescription>
              Outlined style with a visible border.
            </ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="muted">
          <ItemMedia variant="icon">
            <InboxIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Muted Variant</ItemTitle>
            <ItemDescription>
              Muted background for secondary content.
            </ItemDescription>
          </ItemContent>
        </Item>
      </div>
    );
  },
} satisfies Story;

/** Size - Use the `size` prop to change the size of the item. Available sizes are `default`, `sm`, and `xs`. */
export const Size = {
  tags: ['!test'],
  args: {},
  render: (args) => {
    return (
      <div className="flex w-full max-w-md flex-col gap-6">
        <Item variant="outline">
          <ItemMedia variant="icon">
            <InboxIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Default Size</ItemTitle>
            <ItemDescription>
              The standard size for most use cases.
            </ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" size="sm">
          <ItemMedia variant="icon">
            <InboxIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Small Size</ItemTitle>
            <ItemDescription>A compact size for dense layouts.</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" size="xs">
          <ItemMedia variant="icon">
            <InboxIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Extra Small Size</ItemTitle>
            <ItemDescription>The most compact size available.</ItemDescription>
          </ItemContent>
        </Item>
      </div>
    );
  },
} satisfies Story;

/** Item Primary Visual - Verifies the item component renders correctly */
export const PrimaryVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {},
  render: (args) => (
    <Item variant="outline">
      <ItemContent>
        <ItemTitle>Basic Item</ItemTitle>
        <ItemDescription>A simple item with title and description.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">Action</Button>
      </ItemActions>
    </Item>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Basic Item')).toBeInTheDocument();
    await expect(canvas.getByText(/simple item with title/i)).toBeInTheDocument();
  },
} satisfies Story;

/** Item With Checkbox Visual - Verifies the item with checkbox renders correctly */
export const WithCheckboxVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {},
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox checked={false} />
      <Label htmlFor="checkbox-item" className="text-xsm">Label for Checkbox</Label>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('checkbox')).toBeInTheDocument();
    await expect(canvas.getByText(/label for checkbox/i)).toBeInTheDocument();
  },
} satisfies Story;

/** Item Size Visual - Verifies different item sizes render correctly */
export const SizeVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {},
  render: (args) => (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Item variant="outline" size="xs">
        <ItemMedia variant="icon"><InboxIcon /></ItemMedia>
        <ItemContent><ItemTitle>Extra Small</ItemTitle></ItemContent>
      </Item>
      <Item variant="outline" size="sm">
        <ItemMedia variant="icon"><InboxIcon /></ItemMedia>
        <ItemContent><ItemTitle>Small Size</ItemTitle></ItemContent>
      </Item>
      <Item variant="outline">
        <ItemMedia variant="icon"><InboxIcon /></ItemMedia>
        <ItemContent><ItemTitle>Default Size</ItemTitle></ItemContent>
      </Item>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Extra Small')).toBeInTheDocument();
    await expect(canvas.getByText('Small Size')).toBeInTheDocument();
    await expect(canvas.getByText('Default Size')).toBeInTheDocument();
  },
} satisfies Story;

