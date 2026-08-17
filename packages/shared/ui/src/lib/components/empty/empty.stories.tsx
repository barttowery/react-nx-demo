import type { Meta, StoryObj } from '@storybook/react-vite';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from './empty';
import { Button } from '../button/button';
import { Cloud } from "lucide-react";
import { expect, within } from 'storybook/test';

/** Empty - Use the Empty component to display an empty state. */
const meta = {
  component: Empty,
  title: 'Components/Empty',
} satisfies Meta<typeof Empty>;
export default meta;

type Story = StoryObj<typeof Empty>;

/** Basic Example - Includes image, title, description and content with a button. */
export const Primary = {
  args: {
    className: 'border border-dashed',
    children: (
      <>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Cloud />
          </EmptyMedia>
          <EmptyTitle>Cloud Storage Empty</EmptyTitle>
          <EmptyDescription>
            Upload files to your cloud storage to access them anywhere.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant="outline" size="sm">
            Upload Files
          </Button>
        </EmptyContent>
      </>
    )
  },
} satisfies Story;

/** Empty Visual - Verifies the empty component renders correctly */
export const PrimaryVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    className: 'border border-dashed',
    children: (
      <>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Cloud />
          </EmptyMedia>
          <EmptyTitle>Cloud Storage Empty</EmptyTitle>
          <EmptyDescription>
            Upload files to your cloud storage to access them anywhere.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant="outline" size="sm">
            Upload Files
          </Button>
        </EmptyContent>
      </>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Cloud Storage Empty')).toBeInTheDocument();
    await expect(canvas.getByText('Upload Files')).toBeInTheDocument();
  },
} satisfies Story;
