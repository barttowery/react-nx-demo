import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './input';

/** Input - A basic input component for user text entry. */
const meta = {
  component: Input,
  title: 'Components/Input',
} satisfies Meta<typeof Input>;
export default meta;

type Story = StoryObj<typeof Input>;

/** Default story - Displays a default input field with placeholder */
export const Primary = {
  tags: ['!test'],
  args: {
    placeholder: 'Enter text',
  },
} satisfies Story;

/** Disabled input - Displays a disabled input field */
export const Disabled = {
  tags: ['!test'],
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
} satisfies Story;

/** Invalid input - Displays an invalid input field */
export const Invalid = {
  tags: ['!test'],
  args: {
    placeholder: 'Invalid input',
    'aria-invalid': true,
  },
} satisfies Story;

/** File input - Displays a file input field */
export const File = {
  tags: ['!test'],
  args: {
    type: 'file',
    placeholder: 'Choose a file',
  },
} satisfies Story;
