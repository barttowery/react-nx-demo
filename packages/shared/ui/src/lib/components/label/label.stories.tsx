import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from './label';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../tooltip/tooltip';
import { CircleQuestionMark } from 'lucide-react';
import { Checkbox } from '../checkbox/checkbox';

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
        <Checkbox {...args} />
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
};
