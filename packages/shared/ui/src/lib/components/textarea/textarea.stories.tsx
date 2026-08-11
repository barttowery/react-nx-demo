import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './textarea';

/** Textarea - A basic textarea component for multi-line text entry. */
const meta = {
  component: Textarea,
  title: 'Components/Textarea',
} satisfies Meta<typeof Textarea>;
export default meta;

type Story = StoryObj<typeof Textarea>;

/** Default story - Displays a default textarea field with placeholder */
export const Primary = {
  tags: ['!test'],
  args: {
    placeholder: 'Enter text',
  },
} satisfies Story;

/** Disabled textarea - Displays a disabled textarea field */
export const Disabled = {
  tags: ['!test'],
  args: {
    placeholder: 'Disabled textarea',
    disabled: true,
  },
} satisfies Story;

/** Invalid textarea - Displays an invalid textarea field */
export const Invalid = {
  tags: ['!test'],
  args: {
    placeholder: 'Invalid textarea',
    'aria-invalid': true,
  },
} satisfies Story;
