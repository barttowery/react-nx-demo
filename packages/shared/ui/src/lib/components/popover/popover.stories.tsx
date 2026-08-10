import type { Meta, StoryObj } from '@storybook/react-vite';
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from './popover';
import { Button } from '../button/button';
import { Input } from '../input/input';
import { Field, FieldGroup, FieldLabel } from '../field/field';

/** Popover - Displays content in a portal when triggered by a button. */
const meta = {
  component: Popover,
  title: 'Components/Popover',
} satisfies Meta<typeof Popover>;
export default meta;

type Story = StoryObj<typeof Popover>;

/** Default popover - Displays a popover with a header, title, and description */
export const Primary = {
  args: {
    children: (
      <>
        <PopoverTrigger asChild>
          <Button variant="outline">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent align="start">
          <PopoverHeader>
            <PopoverTitle>Dimensions</PopoverTitle>
            <PopoverDescription>
              Set the dimensions for the layer.
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </>
    ),
  },
} satisfies Story;

/* Align Popover - Use the `align` prop on `PopoverContent` to position the popover relative to the trigger */
export const AlignPopover = {
  args: {},
  render: (args) => {
    return (
      <div className="flex gap-6">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">
              Start
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-40">
            Aligned to start
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">
              Center
            </Button>
          </PopoverTrigger>
          <PopoverContent align="center" className="w-40">
            Aligned to center
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">
              End
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-40">
            Aligned to end
          </PopoverContent>
        </Popover>
      </div>
    );
  },
} satisfies Story;

/** Popover with Form - Displays a popover with a form inside */
export const WithForm = {
  args: {
    children: (
      <>
        <PopoverTrigger asChild>
          <Button variant="outline">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent className="w-64" align="start">
          <PopoverHeader>
            <PopoverTitle>Dimensions</PopoverTitle>
            <PopoverDescription>
              Set the dimensions for the layer.
            </PopoverDescription>
          </PopoverHeader>
          <FieldGroup className="gap-4">
            <Field orientation="horizontal">
              <FieldLabel htmlFor="width" className="w-1/2">
                Width
              </FieldLabel>
              <Input id="width" defaultValue="100%" />
            </Field>
            <Field orientation="horizontal">
              <FieldLabel htmlFor="height" className="w-1/2">
                Height
              </FieldLabel>
              <Input id="height" defaultValue="25px" />
            </Field>
          </FieldGroup>
        </PopoverContent>
      </>
    ),
  },
} satisfies Story;
