import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './checkbox';
import { Label } from '../label/label';
import { expect, within } from 'storybook/test';

/** Checkbox - A control that allows the user to toggle between checked and not checked. */
const meta = {
  component: Checkbox,
  title: 'Components/Checkbox',
  args: {
    disabled: false,
  },
} satisfies Meta<typeof Checkbox>;
export default meta;

type Story = StoryObj<typeof Checkbox>;

/** Default story - Displays a default checkbox */
export const Primary: Story = {
  tags: ['!test'],
  args: {
    'aria-label': 'checkbox',
  },
};

/** Disabled checkbox - Displays a disabled checkbox */
export const Disabled: Story = {
  tags: ['!test'],
  args: {
    'aria-label': 'checkbox',
    disabled: true,
  },
};

/** Disabled Checked checkbox - Displays a disabled checked checkbox */
export const DisabledChecked: Story = {
  tags: ['!test'],
  args: {
    checked: true,
    disabled: true,
    'aria-label': 'checkbox',
  },
};

/** Indeterminate checkbox - Displays a checkbox in an indeterminate state */
export const Indeterminate: Story = {
  tags: ['!test'],
  args: {
    checked: 'indeterminate',
    'aria-label': 'checkbox',
  },
};

/** Invalid checkbox - Displays a checkbox in an invalid state */
export const Invalid: Story = {
  tags: ['!test'],
  args: {
    'aria-invalid': true,
    'aria-label': 'checkbox',
  },
};

/** Checkbox with Label - Displays a checkbox with a label */
export const WithLabel: Story = {
  tags: ['!test'],
  args: {
    'aria-label': 'checkbox',
  },
  render: (args) => {
    return (
      <div className="flex items-center space-x-2">
        <Checkbox {...args} />
        <Label className="text-xsm" htmlFor="checkbox">
          Label for Checkbox
        </Label>
      </div>
    );
  },
};

/** Group of Checkboxes - Displays a group of checkboxes with labels */
export const GroupOfCheckboxes: Story = {
  tags: ['!test'],
  render: (args) => {
    return (
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center space-x-2">
          <Checkbox name="checkbox1" {...args} />
          <Label htmlFor="checkbox1" className="text-xsm leading-3">Label for Checkbox</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox name="checkbox2" {...args} />
          <Label htmlFor="checkbox2" className="text-xsm leading-3">Label for Checkbox</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox name="checkbox3" {...args} />
          <Label htmlFor="checkbox3" className="text-xsm leading-3">Label for Checkbox</Label>
        </div>
      </div>
    );
  },
};

/** Checkbox Primary Visual - Verifies the checkbox component renders correctly */
export const PrimaryVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    'aria-label': 'checkbox',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('checkbox')).toBeInTheDocument();
  },
} satisfies Story;

/** Checkbox With Label Visual - Verifies the checkbox with label renders correctly */
export const WithLabelVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    'aria-label': 'checkbox',
  },
  render: (args) => {
    return (
      <div className="flex items-center space-x-2">
        <Checkbox {...args} />
        <Label htmlFor="checkbox">Label for Checkbox</Label>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('checkbox')).toBeInTheDocument();
    await expect(canvas.getByText(/Label for Checkbox/i)).toBeInTheDocument();
  },
} satisfies Story;

/** Checkbox Indeterminate Visual - Verifies the checkbox in indeterminate state renders correctly */
export const IndeterminateVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    checked: 'indeterminate',
    'aria-label': 'checkbox',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('checkbox')).toHaveAttribute('data-state', 'indeterminate');
  },
} satisfies Story;
