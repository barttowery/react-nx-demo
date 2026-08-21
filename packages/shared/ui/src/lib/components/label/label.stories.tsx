import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from './label';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../tooltip/tooltip';
import { CircleQuestionMark } from 'lucide-react';
import { Checkbox } from '../checkbox/checkbox';
import { expect, within } from 'storybook/test';

/** Label - Renders an accessible label associated with controls. For form fields, use the Field component which includes built-in FieldLabel, FieldDescription, and FieldError components.*/
const meta = {
  component: Label,
  title: 'Components/Label',
} satisfies Meta<typeof Label>;
export default meta;

type Story = StoryObj<typeof Label>;

/** Default story - Displays a default label */
export const Primary = {
  tags: ['!test'],
  args: {
    children: 'Label',
  },
} satisfies Story;

/** Label with checkbox - Displays a label with a checkbox */
export const WithCheckbox = {
  tags: ['!test'],
  render: (args) => {
    return (
      <div className="flex items-center space-x-2">
        <Checkbox id="checkbox"/>
        <Label className="text-xsm" htmlFor="checkbox">
          Label for Checkbox
        </Label>
      </div>
    );
  },
} satisfies Story;

/** Label component with a tooltip */
export const WithTooltip: Story = {
  tags: ['!test'],
  args: {
    children: (
      <>
        Label text
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <CircleQuestionMark className="ml-1 h-4 w-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>This is the tooltip content</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </>
    ),
  },
} satisfies Story;

/** Label Primary Visual - Verifies the label component renders correctly */
export const PrimaryVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    children: 'Primary Label',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Primary Label')).toBeInTheDocument();
  },
} satisfies Story;

/** Label With Checkbox Visual - Verifies the label with checkbox renders correctly */
export const WithCheckboxVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {},
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="checkbox" />
      <Label htmlFor="checkbox">Label for Checkbox</Label>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('checkbox')).toBeInTheDocument();
    await expect(canvas.getByText(/label for checkbox/i)).toBeInTheDocument();
  },
} satisfies Story;

/** Label With Tooltip Visual - Verifies the label with tooltip renders correctly */
export const WithTooltipVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {},
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Label>
        Label with Tooltip
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <CircleQuestionMark className="ml-1 h-4 w-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>Tooltip content</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Label>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Label with Tooltip')).toBeInTheDocument();
  },
} satisfies Story;
