import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from './progress';
import { Field, FieldLabel } from '../field/field';

/** Progress - Displays an indicator showing the completion progress of a task, typically displayed as a progress bar. */
const meta = {
  component: Progress,
  title: 'Components/Progress',
} satisfies Meta<typeof Progress>;
export default meta;

type Story = StoryObj<typeof Progress>;

/** Default - Simple progress bar. */
export const Primary = {
  tags: ['!test'],
  args: {
    value: 60,
    className: 'w-full max-w-sm',
  },
} satisfies Story;

/** With Label - Use a `Field` component to add a label to the progress bar.*/
export const Size: Story = {
  tags: ['!test'],
  args: {},
  render: (args) => (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="progress-upload">
        <span>Upload progress</span>
        <span className="ml-auto">66%</span>
      </FieldLabel>
      <Progress value={66} id="progress-upload" />
    </Field>
  ),
};
