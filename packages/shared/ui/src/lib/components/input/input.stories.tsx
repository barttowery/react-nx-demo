import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './input';
import { expect, within } from 'storybook/test';

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

/** Input Primary Visual - Verifies the input component renders correctly */
export const PrimaryVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    placeholder: 'Enter text',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByPlaceholderText('Enter text')).toBeInTheDocument();
    await expect(canvas.getByRole('textbox')).toBeInTheDocument();
  },
} satisfies Story;

/** Input With Label Visual - Verifies the input with label renders correctly */
export const WithLabelVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    id: 'input-label',
    placeholder: 'Enter text',
  },
  render: (args) => (
    <div className="space-y-2">
      <label htmlFor={args.id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Label for Input
      </label>
      <Input {...args} id={args.id} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('textbox')).toBeInTheDocument();
    await expect(canvas.getByText(/Label for Input/i)).toBeInTheDocument();
  },
} satisfies Story;

/** Input With Value Visual - Verifies the input with value renders correctly */
export const WithValueVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    placeholder: 'Enter text',
    defaultValue: 'Pre-filled value',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByDisplayValue('Pre-filled value')).toBeInTheDocument();
  },
} satisfies Story;
