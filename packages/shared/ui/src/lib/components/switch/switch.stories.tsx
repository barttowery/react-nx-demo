import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './switch';
import { Label } from '../label/label';
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldTitle } from '../field/field';
import { expect, within } from 'storybook/test';

/** Switch - A component that provides a toggle switch for user input */
const meta = {
  component: Switch,
  title: 'Components/Switch',
} satisfies Meta<typeof Switch>;
export default meta;

type Story = StoryObj<typeof Switch>;

/** Primary story - Displays a normal switch with a label */
export const Primary = {
  tags: ['!test'],
  render: (args) => {
    return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
    );
  }
} satisfies Story;

/** Switch With Description - Displays a switch with a description */
export const WithDescription = {
  tags: ['!test'],
  render: (args) => {
    return (
      <Field orientation="horizontal" className="max-w-sm">
        <FieldContent>
          <FieldLabel htmlFor="switch-focus-mode">
            Share across devices
          </FieldLabel>
          <FieldDescription>
            Focus is shared across devices, and turns off when you leave the app.
          </FieldDescription>
        </FieldContent>
        <Switch id="switch-focus-mode" />
      </Field>
    );
  }
} satisfies Story;

/** Switch Choice Card - Displays a switch within a choice card - Not currently very accessible */
export const ChoiceCard = {
  tags: ['!test'],
  render: (args) => {
    return (
      <FieldGroup className="w-full max-w-sm">
        <FieldLabel htmlFor="switch-share">
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>Share across devices</FieldTitle>
              <FieldDescription>
                Focus is shared across devices, and turns off when you leave the
                app.
              </FieldDescription>
            </FieldContent>
            <Switch id="switch-share" />
          </Field>
        </FieldLabel>
        <FieldLabel htmlFor="switch-notifications">
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>Enable notifications</FieldTitle>
              <FieldDescription>
                Receive notifications when focus mode is enabled or disabled.
              </FieldDescription>
            </FieldContent>
            <Switch id="switch-notifications" defaultChecked />
          </Field>
        </FieldLabel>
      </FieldGroup>
    );
  }
} satisfies Story;

/** Disabled Switch - Displays a disabled switch */
export const Disabled = {
  tags: ['!test'],
  render: (args) => {
    return (
      <Field orientation="horizontal" data-disabled className="w-fit">
        <Switch id="switch-disabled-unchecked" disabled />
        <FieldLabel htmlFor="switch-disabled-unchecked">Disabled</FieldLabel>
      </Field>
    );
  }
} satisfies Story;

/** Invalid Switch - Displays an invalid switch */
export const Invalid = {
  tags: ['!test'],
  render: (args) => {
    return (
      <Field orientation="horizontal" className="max-w-sm" data-invalid>
        <FieldContent>
          <FieldLabel htmlFor="switch-terms">
            Accept terms and conditions
          </FieldLabel>
          <FieldDescription>
            You must accept the terms and conditions to continue.
          </FieldDescription>
        </FieldContent>
        <Switch id="switch-terms" aria-invalid />
      </Field>
    );
  }
} satisfies Story;

/** Switch Size - Displays switches in different sizes, uses `sm` or `default` */
export const Size = {
  tags: ['!test'],
  render: (args) => {
    return (
      <FieldGroup className="w-full max-w-40">
        <Field orientation="horizontal">
          <Switch id="switch-size-sm" size="sm" />
          <FieldLabel htmlFor="switch-size-sm">Small</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Switch id="switch-size-default" size="default" />
          <FieldLabel htmlFor="switch-size-default">Default</FieldLabel>
        </Field>
      </FieldGroup>
    );
  }
} satisfies Story;

/** Switch Primary Visual - Verifies the switch renders correctly with label */
export const PrimaryVisual: Story = {
  tags: ['!dev', '!autodocs'],
  render: (args) => {
    return (
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const switchInput = canvas.getByRole('switch', { name: /Airplane Mode/i });
    await expect(switchInput).toBeInTheDocument();
    await expect(switchInput).not.toBeChecked();
  },
} satisfies Story;

/** Switch With Description Visual - Verifies switch with description renders correctly */
export const WithDescriptionVisual: Story = {
  tags: ['!dev', '!autodocs'],
  render: (args) => {
    return (
      <Field orientation="horizontal" className="max-w-sm">
        <FieldContent>
          <FieldLabel htmlFor="switch-focus-mode">Share across devices</FieldLabel>
          <FieldDescription>Focus is shared across devices, and turns off when you leave the app.</FieldDescription>
        </FieldContent>
        <Switch id="switch-focus-mode" />
      </Field>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const switchInput = canvas.getByRole('switch', { name: /Share across devices/i });
    await expect(switchInput).toBeInTheDocument();
    await expect(switchInput).not.toBeChecked();
  },
} satisfies Story;
