import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputGroup, InputGroupInput, InputGroupAddon, InputGroupText, InputGroupButton, InputGroupTextarea } from './input-group';
import {
  CheckIcon,
  CornerDownLeft,
  CopyIcon,
  RefreshCw,
  CreditCardIcon,
  Search,
} from "lucide-react";

/** Input Group - A component that groups related inputs and addons, button, and helper content together. */
const meta = {
  component: InputGroup,
  title: 'Components/Input Group',
} satisfies Meta<typeof InputGroup>;
export default meta;

type Story = StoryObj<typeof InputGroup>;

/** Default Input Group - Displays a default input group with an input and two addons. */
export const Primary = {
  tags: ['!test'],
  args: {},
  render: (args) => {
    return (
      <InputGroup className="max-w-xs">
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
      </InputGroup>
    );
  },
} satisfies Story;

/** Input Group with Icon - Displays an input group with an input and two icon addons. */
export const WithIcon = {
  tags: ['!test'],
  args: {},
  render: (args) => {
    return (
      <InputGroup>
        <InputGroupInput placeholder="Card number" />
        <InputGroupAddon>
          <CreditCardIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <CheckIcon />
        </InputGroupAddon>
      </InputGroup>
    );
  },
} satisfies Story;

/** Input Group with Text Addon - Displays an input group with an input and a text addon. */
export const WithTextAddon = {
  tags: ['!test'],
  args: {},
  render: (args) => {
    return (
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    );
  },
} satisfies Story;

/** Input Group with Button - Displays an input group with an input and a button addon. */
export const WithButton = {
  tags: ['!test'],
  args: {},
  render: (args) => {
    return (
      <InputGroup>
        <InputGroupInput placeholder="Type to search..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="secondary">Search</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    );
  },
} satisfies Story;

/** Input Group with Textarea - Displays an input group with a textarea and a button addon. */
export const WithTextarea = {
  tags: ['!test'],
  args: {},
  render: (args) => {
    return (
    <div className="grid w-full max-w-md gap-4">
      <InputGroup>
        <InputGroupTextarea
          id="textarea-code-32"
          placeholder="console.log('Hello, world!');"
          className="min-h-50"
        />
        <InputGroupAddon align="block-end" className="border-t border-border">
          <InputGroupText>Line 1, Column 1</InputGroupText>
          <InputGroupButton size="sm" className="ml-auto" variant="default">
            Run <CornerDownLeft />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupAddon align="block-start" className="border-b border-border">
          <InputGroupText className="font-mono font-medium">
            script.js
          </InputGroupText>
          <InputGroupButton aria-label="Refresh Button" className="ml-auto" size="icon-xs">
            <RefreshCw />
          </InputGroupButton>
          <InputGroupButton aria-label="Copy Button" variant="ghost" size="icon-xs">
            <CopyIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
    );
  },
} satisfies Story;
