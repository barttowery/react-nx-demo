import type { Meta, StoryObj } from '@storybook/react-vite';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from './empty';
import { Button } from '../button/button';
import { Cloud } from "lucide-react";

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
