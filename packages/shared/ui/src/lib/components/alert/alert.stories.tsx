import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert, AlertDescription, AlertTitle } from './alert';
import { CheckCircle2Icon, AlertCircleIcon } from "lucide-react";
import { expect, within } from 'storybook/test';

/** Alert Component - Used for displaying alert messages either after an action or as a standalone notification. Toasts could also be used for this purpose. */
const meta = {
  component: Alert,
  title: 'Components/Alert',
} satisfies Meta<typeof Alert>;
export default meta;

type Story = StoryObj<typeof Alert>;

/** Base Alert (uses default variant) - Used for normal alert messages such as a success message after a form submission */
export const Primary = {
  tags: ['!test'],
  args: {
    children: (
      <>
        <CheckCircle2Icon />
        <AlertTitle>Account updated successfully</AlertTitle>
        <AlertDescription>
          Your profile information has been saved. Changes will be reflected
          immediately.
        </AlertDescription>
      </>
    ),
    className: "max-w-md",
  },
} satisfies Story;

/** Destructive Alert - Used for destructive alert messages such as a payment failure or an error message */
export const Destructive = {
  tags: ['!test'],
  args: {
    variant: "destructive",
    children: (
      <>
        <AlertCircleIcon />
        <AlertTitle>Payment failed</AlertTitle>
        <AlertDescription>
          Your payment could not be processed. Please check your payment method
          and try again.
        </AlertDescription>
      </>
    ),
    className: "max-w-md",
  },
} satisfies Story;

/** Alert Primary Visual - Verifies the alert component renders correctly with default styling */
export const PrimaryVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    children: (
      <>
        <CheckCircle2Icon />
        <AlertTitle>Account updated successfully</AlertTitle>
        <AlertDescription>Your profile information has been saved.</AlertDescription>
      </>
    ),
    className: "max-w-md",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByRole('alert');
    await expect(alert).toBeInTheDocument();
  },
} satisfies Story;

/** Alert Destructive Visual - Verifies the alert component renders correctly with destructive styling */
export const DestructiveVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    variant: "destructive",
    children: (
      <>
        <AlertCircleIcon />
        <AlertTitle>Payment failed</AlertTitle>
        <AlertDescription>Your payment could not be processed.</AlertDescription>
      </>
    ),
    className: "max-w-md",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByRole('alert');
    await expect(alert).toBeInTheDocument();
    await expect(alert).toHaveClass('bg-card text-destructive');
  },
} satisfies Story;
