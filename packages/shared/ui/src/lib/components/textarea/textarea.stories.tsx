import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './textarea';
import { expect, within } from 'storybook/test';

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

/** Textarea Primary Visual - Verifies the textarea renders correctly with default styling */
export const PrimaryVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    placeholder: 'Enter text here...',
    className: "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByPlaceholderText(/Enter text here.../i);
    await expect(textarea).toBeInTheDocument();
    await expect(textarea).toHaveClass('flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2');
  },
} satisfies Story;

/** Textarea With Label Visual - Verifies the textarea renders correctly with a label */
export const WithLabelVisual: Story = {
  tags: ['!dev', '!autodocs'],
  render: (args) => {
    return (
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Your message</label>
        <Textarea id="message" placeholder="Type your message here..." className="min-h-30" />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText(/Your message/i);
    await expect(label).toBeInTheDocument();
    const textarea = canvas.getByPlaceholderText(/Type your message here.../i);
    await expect(textarea).toBeInTheDocument();
    await expect(textarea).toHaveAttribute('id', 'message');
  },
} satisfies Story;

/** Textarea Disabled Visual - Verifies disabled textarea renders correctly */
export const DisabledVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    placeholder: 'Disabled textarea',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByPlaceholderText(/Disabled textarea/i);
    await expect(textarea).toBeInTheDocument();
    await expect(textarea).toBeDisabled();
    await expect(textarea).toHaveClass('disabled:cursor-not-allowed disabled:opacity-50');
  },
} satisfies Story;
