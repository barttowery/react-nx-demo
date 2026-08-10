import type { Meta, StoryObj } from '@storybook/react-vite';
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from './item';
import { Button } from '../button/button';
import { BadgeCheckIcon, ChevronRightIcon, InboxIcon } from 'lucide-react';

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

