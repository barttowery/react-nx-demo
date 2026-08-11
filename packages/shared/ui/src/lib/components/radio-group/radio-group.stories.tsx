import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioGroup, RadioGroupItem } from './radio-group';
import { Label } from '../label/label';
import { Field, FieldContent, FieldLabel, FieldDescription, FieldTitle, FieldSet, FieldLegend } from '../field/field';
import { expect, within } from 'storybook/test';

/** RadioGroup - A component that allows the user to select one option from a set of options. */
const meta = {
  component: RadioGroup,
  title: 'Components/Radio Group',
} satisfies Meta<typeof RadioGroup>;
export default meta;

type Story = StoryObj<typeof RadioGroup>;

/** Default story - Displays a default radio group with three options */
export const Primary = {
  tags: ['!test'],
  args: {
    defaultValue: 'comfortable',
    className: 'w-fit',
    children: (
      <>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </>
    )
  },
} satisfies Story;

/** With Description - Displays a radio group with descriptions for each option */
export const WithDescription = {
  tags: ['!test'],
  args: {
    defaultValue: 'comfortable',
    className: 'w-fit',
    children: (
      <>
        <Field orientation="horizontal">
          <RadioGroupItem value="default" id="desc-r1" />
          <FieldContent>
            <FieldLabel htmlFor="desc-r1">Default</FieldLabel>
            <FieldDescription>
              Standard spacing for most use cases.
            </FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="comfortable" id="desc-r2" />
          <FieldContent>
            <FieldLabel htmlFor="desc-r2">Comfortable</FieldLabel>
            <FieldDescription>More space between elements.</FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="compact" id="desc-r3" />
          <FieldContent>
            <FieldLabel htmlFor="desc-r3">Compact</FieldLabel>
            <FieldDescription>
              Minimal spacing for dense layouts.
            </FieldDescription>
          </FieldContent>
        </Field>
      </>
    )
  },
} satisfies Story;

/** Choice Card - Displays a radio group as a set of choice cards - NOTE: Not very accessible at this point */
export const ChoiceCard = {
  tags: ['!test'],
  args: {
    defaultValue: 'pro',
    className: 'max-w-sm',
    children: (
      <>
        <FieldLabel htmlFor="plus-plan">
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>Plus</FieldTitle>
              <FieldDescription>
                For individuals and small teams.
              </FieldDescription>
            </FieldContent>
            <RadioGroupItem value="plus" id="plus-plan" />
          </Field>
        </FieldLabel>
        <FieldLabel htmlFor="pro-plan">
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>Pro</FieldTitle>
              <FieldDescription>For growing businesses.</FieldDescription>
            </FieldContent>
            <RadioGroupItem value="pro" id="pro-plan" />
          </Field>
        </FieldLabel>
        <FieldLabel htmlFor="enterprise-plan">
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>Enterprise</FieldTitle>
              <FieldDescription>
                For large teams and enterprises.
              </FieldDescription>
            </FieldContent>
            <RadioGroupItem value="enterprise" id="enterprise-plan" />
          </Field>
        </FieldLabel>
      </>
    )
  },
} satisfies Story;

/** Field Set Example - Displays a radio group within a field set */
export const FieldSetExample: Story = {
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
} satisfies Story;

/** Disabled Radio Group - Displays a disabled radio group */
export const Disabled: Story = {
  tags: ['!test'],
  args: {
    defaultValue: 'option2',
    className: 'w-fit',
    children: (
      <>
      <Field orientation="horizontal" data-disabled>
        <RadioGroupItem value="option1" id="disabled-1" disabled />
        <FieldLabel htmlFor="disabled-1" className="font-normal">
          Disabled
        </FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="option2" id="disabled-2" />
        <FieldLabel htmlFor="disabled-2" className="font-normal">
          Option 2
        </FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="option3" id="disabled-3" />
        <FieldLabel htmlFor="disabled-3" className="font-normal">
          Option 3
        </FieldLabel>
      </Field>
      </>
    ),
  },
} satisfies Story;

/** Invalid Radio Group - Displays a radio group with an invalid state. Use `aria-invalid` on `RadioGroupItem` and `data-invalid` on `Field` to show validation errors. */
export const InvalidExample: Story = {
  tags: ['!test'],
  render: (args) => {
    return (
      <FieldSet className="w-full max-w-xs">
        <FieldLegend variant="label">Notification Preferences</FieldLegend>
        <FieldDescription>
          Choose how you want to receive notifications.
        </FieldDescription>
        <RadioGroup defaultValue="email">
          <Field orientation="horizontal" data-invalid>
            <RadioGroupItem value="email" id="invalid-email" aria-invalid />
            <FieldLabel htmlFor="invalid-email" className="font-normal">
              Email only
            </FieldLabel>
          </Field>
          <Field orientation="horizontal" data-invalid>
            <RadioGroupItem value="sms" id="invalid-sms" aria-invalid />
            <FieldLabel htmlFor="invalid-sms" className="font-normal">
              SMS only
            </FieldLabel>
          </Field>
          <Field orientation="horizontal" data-invalid>
            <RadioGroupItem value="both" id="invalid-both" aria-invalid />
            <FieldLabel htmlFor="invalid-both" className="font-normal">
              Both Email & SMS
            </FieldLabel>
          </Field>
        </RadioGroup>
      </FieldSet>
    );
  },
} satisfies Story;

/** Radio Group Default Visual - Verifies the radio group renders correctly with default styling */
export const PrimaryVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    defaultValue: 'comfortable',
    className: 'w-fit',
    children: (
      <>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="default" id="visual-r1" />
          <Label htmlFor="visual-r1">Default</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="comfortable" id="visual-r2" />
          <Label htmlFor="visual-r2">Comfortable</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="compact" id="visual-r3" />
          <Label htmlFor="visual-r3">Compact</Label>
        </div>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const comfortableOption = canvas.getByText(/Comfortable/i);
    await expect(comfortableOption).toBeInTheDocument();
    const radioInputs = canvas.getAllByRole('radio');
    await expect(radioInputs).toHaveLength(3);
  },
} satisfies Story;

/** Radio Group With Description Visual - Verifies radio group with descriptions renders correctly */
export const WithDescriptionVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    defaultValue: 'comfortable',
    className: 'w-fit',
    children: (
      <>
        <Field orientation="horizontal">
          <RadioGroupItem value="default" id="visual-desc-r1" />
          <FieldContent>
            <FieldLabel htmlFor="visual-desc-r1">Default</FieldLabel>
            <FieldDescription>
              Standard spacing for most use cases.
            </FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="comfortable" id="visual-desc-r2" />
          <FieldContent>
            <FieldLabel htmlFor="visual-desc-r2">Comfortable</FieldLabel>
            <FieldDescription>More space between elements.</FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="compact" id="visual-desc-r3" />
          <FieldContent>
            <FieldLabel htmlFor="visual-desc-r3">Compact</FieldLabel>
            <FieldDescription>
              Minimal spacing for dense layouts.
            </FieldDescription>
          </FieldContent>
        </Field>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const defaultLabel = canvas.getByText(/Default/i);
    await expect(defaultLabel).toBeInTheDocument();
    const description = canvas.getByText(/Standard spacing for most use cases./i);
    await expect(description).toBeInTheDocument();
  },
} satisfies Story;

/** Radio Group Disabled Visual - Verifies disabled radio group renders correctly */
export const DisabledVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    defaultValue: 'option2',
    className: 'w-fit',
    children: (
      <>
        <Field orientation="horizontal" data-disabled>
          <RadioGroupItem value="option1" id="visual-disabled-1" disabled />
          <FieldLabel htmlFor="visual-disabled-1" className="font-normal">
            Disabled
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="option2" id="visual-disabled-2" />
          <FieldLabel htmlFor="visual-disabled-2" className="font-normal">
            Option 2
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="option3" id="visual-disabled-3" />
          <FieldLabel htmlFor="visual-disabled-3" className="font-normal">
            Option 3
          </FieldLabel>
        </Field>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const disabledInput = canvas.getByRole('radio', { name: 'Disabled' });
    await expect(disabledInput).toBeDisabled();
  },
} satisfies Story;
