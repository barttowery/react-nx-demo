import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
  FieldSet,
  FieldTitle,
  FieldLegend,
  FieldContent,
  FieldSeparator,
} from './field';
import { Input } from '../input/input';
import { Textarea } from '../textarea/textarea';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../select/select';
import { Slider } from '../slider/slider';
import { useState } from 'react';
import { Checkbox } from '../checkbox/checkbox';
import { RadioGroup, RadioGroupItem } from '../radio-group/radio-group';
import { Switch } from '../switch/switch';
import { expect, within } from 'storybook/test';

/** Field - A component that provides a consistent layout for form fields, including label, description, and error messages. */
const meta = {
  component: Field,
  title: 'Components/Field',
} satisfies Meta<typeof Field>;
export default meta;

type Story = StoryObj<typeof Field>;

export const Primary = {
  tags: ['!test'],
  args: {},
} satisfies Story;

/** Field with Input - An example field with an Input control */
export const InputWithField: Story = {
  tags: ['!test'],
  render: (args) => {
    return (
      <FieldSet className="w-full max-w-xs">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <Input id="username" type="text" placeholder="Bob Jones" />
            <FieldDescription>
              Choose a unique username for your account.
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <FieldDescription>
              Must be at least 8 characters long.
            </FieldDescription>
            <Input id="password" type="password" placeholder="••••••••" />
          </Field>
        </FieldGroup>
      </FieldSet>
    );
  },
};

/** Field with Textarea - An example field with a Textarea control */
export const TextareaWithField: Story = {
  tags: ['!test'],
  render: (args) => {
    return (
      <FieldSet className="w-full max-w-xs">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
            <Textarea
              id="feedback"
              placeholder="Your feedback helps us improve..."
              rows={4}
            />
            <FieldDescription>
              Share your thoughts about our service.
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldSet>
    );
  },
};

/** Field with Select - An example field with a Select control */
export const SelectWithField: Story = {
  tags: ['!test'],
  render: (args) => {
    return (
      <Field className="w-full max-w-xs">
        <FieldLabel htmlFor="department">Department</FieldLabel>
        <Select>
          <SelectTrigger aria-label="Select a Department">
            <SelectValue id="department" placeholder="Choose department" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="sales">Sales</SelectItem>
              <SelectItem value="support">Customer Support</SelectItem>
              <SelectItem value="hr">Human Resources</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="operations">Operations</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <FieldDescription>
          Select your department or area of work.
        </FieldDescription>
      </Field>
    );
  },
};

/** Field with Slider - An example field with a Slider control */
const SliderWithFieldComponent = () => {
  const [value, setValue] = useState([200, 800]);

  return (
    <Field className="w-full max-w-xs">
      <FieldTitle>Price Range</FieldTitle>
      <FieldDescription>
        Set your budget range ($
        <span className="font-medium tabular-nums">{value[0]}</span> -{" "}
        <span className="font-medium tabular-nums">{value[1]}</span>).
      </FieldDescription>
      <Slider
        value={value}
        onValueChange={(value) => setValue(value as [number, number])}
        max={1000}
        min={0}
        step={10}
        className="mt-2 w-full"
        aria-label="Price Range"
      />
    </Field>
  );
};
export const SliderWithField: Story = {
  tags: ['!test'],
  render: () => <SliderWithFieldComponent />,
};

/** Fieldset - An example fieldset component for semantically grouping related fields */
export const FieldsetExample: Story = {
  tags: ['!test'],
  render: (args) => {
    return (
      <FieldSet className="w-full max-w-sm">
        <FieldLegend>Address Information</FieldLegend>
        <FieldDescription>
          We need your address to deliver your order.
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="street">Street Address</FieldLabel>
            <Input id="street" type="text" placeholder="123 Main St" />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="city">City</FieldLabel>
              <Input id="city" type="text" placeholder="New York" />
            </Field>
            <Field>
              <FieldLabel htmlFor="zip">Postal Code</FieldLabel>
              <Input id="zip" type="text" placeholder="90502" />
            </Field>
          </div>
        </FieldGroup>
      </FieldSet>
    );
  },
};

/** Field with Checkboxes - An example field with checkbox controls */
export const CheckboxesExample: Story = {
  tags: ['!test'],
  render: (args) => {
    return (
      <FieldGroup className="w-full max-w-xs">
        <FieldSet>
          <FieldLegend variant="label">
            Show these items on the desktop
          </FieldLegend>
          <FieldDescription>
            Select the items you want to show on the desktop.
          </FieldDescription>
          <FieldGroup className="gap-3">
            <Field orientation="horizontal">
              <Checkbox id="finder-pref-9k2-hard-disks-ljj" />
              <FieldLabel
                htmlFor="finder-pref-9k2-hard-disks-ljj"
                className="font-normal"
                defaultChecked
              >
                Hard disks
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="finder-pref-9k2-external-disks-1yg" />
              <FieldLabel
                htmlFor="finder-pref-9k2-external-disks-1yg"
                className="font-normal"
              >
                External disks
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="finder-pref-9k2-cds-dvds-fzt" />
              <FieldLabel
                htmlFor="finder-pref-9k2-cds-dvds-fzt"
                className="font-normal"
              >
                CDs, DVDs, and iPods
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="finder-pref-9k2-connected-servers-6l2" />
              <FieldLabel
                htmlFor="finder-pref-9k2-connected-servers-6l2"
                className="font-normal"
              >
                Connected servers
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <Field orientation="horizontal">
          <Checkbox id="finder-pref-9k2-sync-folders-nep" defaultChecked />
          <FieldContent>
            <FieldLabel htmlFor="finder-pref-9k2-sync-folders-nep">
              Sync Desktop & Documents folders
            </FieldLabel>
            <FieldDescription>
              Your Desktop & Documents folders are being synced with iCloud Drive.
              You can access them from other devices.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldGroup>
    );
  },
};

/** Field with Radio Buttons - An example field with radio button controls */
export const RadioButtonsExample: Story = {
  tags: ['!test'],
  render: (args) => {
    return (
      <FieldSet className="w-full max-w-xs">
        <FieldLegend variant="label">Subscription Plan</FieldLegend>
        <FieldDescription>
          Yearly and lifetime plans offer significant savings.
        </FieldDescription>
        <RadioGroup defaultValue="monthly">
          <Field orientation="horizontal">
            <RadioGroupItem value="monthly" id="plan-monthly" />
            <FieldLabel htmlFor="plan-monthly" className="font-normal">
              Monthly ($9.99/month)
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="yearly" id="plan-yearly" />
            <FieldLabel htmlFor="plan-yearly" className="font-normal">
              Yearly ($99.99/year)
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="lifetime" id="plan-lifetime" />
            <FieldLabel htmlFor="plan-lifetime" className="font-normal">
              Lifetime ($299.99)
            </FieldLabel>
          </Field>
        </RadioGroup>
      </FieldSet>
    );
  },
};

/** Field with Switch - Displays a field with a switch control */
export const SwitchExample: Story = {
  tags: ['!test'],
  render: (args) => {
    return (
      <Field orientation="horizontal" className="w-fit">
        <FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
        <Switch id="2fa" />
      </Field>
    );
  }
};

/** Field Group - Stacks multiple `Field` components vertically with `FieldGroup`. Add `FieldSeparator` to divide them. */
export const FieldGroupExample: Story = {
  tags: ['!test'],
  render: (args) => {
    return (
      <FieldGroup className="w-full max-w-xs">
        <FieldSet>
          <FieldLabel>Responses</FieldLabel>
          <FieldDescription>
            Get notified when ChatGPT responds to requests that take time, like
            research or image generation.
          </FieldDescription>
          <FieldGroup data-slot="checkbox-group">
            <Field orientation="horizontal">
              <Checkbox id="push" defaultChecked disabled />
              <FieldLabel htmlFor="push" className="font-normal">
                Push notifications
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <FieldSet>
          <FieldLabel>Tasks</FieldLabel>
          <FieldDescription>
            Get notified when tasks you&apos;ve created have updates.
          </FieldDescription>
          <FieldGroup data-slot="checkbox-group">
            <Field orientation="horizontal">
              <Checkbox id="push-tasks" />
              <FieldLabel htmlFor="push-tasks" className="font-normal">
                Push notifications
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="email-tasks" />
              <FieldLabel htmlFor="email-tasks" className="font-normal">
                Email notifications
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    );
  }
};

/** Field With Input Visual - Verifies field with input renders correctly */
export const InputWithFieldVisual: Story = {
  tags: ['!dev', '!autodocs'],
  render: (args) => {
    return (
      <FieldSet className="w-full max-w-xs">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <Input id="username" type="text" placeholder="Bob Jones" />
            <FieldDescription>
              Choose a unique username for your account.
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <FieldDescription>
              Must be at least 8 characters long.
            </FieldDescription>
            <Input id="password" type="password" placeholder="••••••••" />
          </Field>
        </FieldGroup>
      </FieldSet>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const usernameLabel = await canvas.getAllByText(/Username/i);
    await expect(usernameLabel[0]).toBeInTheDocument();
    const usernameInput = canvas.getByPlaceholderText(/Bob Jones/i);
    await expect(usernameInput).toBeInTheDocument();
    await expect(usernameInput).toHaveAttribute('id', 'username');
  },
} satisfies Story;

/** Field With Textarea Visual - Verifies field with textarea renders correctly */
export const TextareaWithFieldVisual: Story = {
  tags: ['!dev', '!autodocs'],
  render: (args) => {
    return (
      <FieldSet className="w-full max-w-xs">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
            <Textarea
              id="feedback"
              placeholder="Your feedback helps us improve..."
              rows={4}
            />
            <FieldDescription>
              Share your thoughts about our service.
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldSet>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const feedbackLabel = canvas.getByText(/Feedback/i);
    await expect(feedbackLabel).toBeInTheDocument();
    const textarea = canvas.getByPlaceholderText(/Your feedback helps us improve.../i);
    await expect(textarea).toBeInTheDocument();
    await expect(textarea).toHaveAttribute('id', 'feedback');
  },
} satisfies Story;

/** Field With Switch Visual - Verifies field with switch renders correctly */
export const SwitchExampleVisual: Story = {
  tags: ['!dev', '!autodocs'],
  render: (args) => {
    return (
      <Field orientation="horizontal" className="w-fit">
        <FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
        <Switch id="2fa" />
      </Field>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const switchLabel = canvas.getByText(/Multi-factor authentication/i);
    await expect(switchLabel).toBeInTheDocument();
    const switchInput = canvas.getByRole('switch', { name: /Multi-factor authentication/i });
    await expect(switchInput).toBeInTheDocument();
  },
} satisfies Story;
