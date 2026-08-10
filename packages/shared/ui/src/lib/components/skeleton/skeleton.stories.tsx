import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from './skeleton';
import { Card, CardContent, CardHeader } from '../card/card';

/** Skeleton - Displays a shimmering placeholder while content is loading */
const meta = {
  component: Skeleton,
  title: 'Components/Skeleton',
} satisfies Meta<typeof Skeleton>;
export default meta;

type Story = StoryObj<typeof Skeleton>;

/** Primary story - Displays a basic skeleton with a circular avatar and two lines of text. */
export const Primary = {
  tags: ['!test'],
  args: {},
  render: (args) => {
    return (
      <div className="flex items-center gap-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-62.5" />
          <Skeleton className="h-4 w-50" />
        </div>
      </div>
    );
  },
} satisfies Story;

/** Card Example - Displays a skeleton card with an image, title, and description. */
export const CardExample = {
  tags: ['!test'],
  args: {},
  render: (args) => {
    return (
      <Card className="w-full max-w-xs">
        <CardHeader>
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="aspect-video w-full" />
        </CardContent>
      </Card>
    );
  },
} satisfies Story;

/** Form Example - Displays a skeleton form with various input fields. */
export const FormExample = {
  tags: ['!test'],
  args: {},
  render: (args) => {
    return (
      <div className="flex w-full max-w-xs flex-col gap-7">
        <div className="flex flex-col gap-3">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-8 w-full" />
        </div>
        <div className="flex flex-col gap-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-full" />
        </div>
        <Skeleton className="h-8 w-24" />
      </div>
    );
  },
} satisfies Story;
