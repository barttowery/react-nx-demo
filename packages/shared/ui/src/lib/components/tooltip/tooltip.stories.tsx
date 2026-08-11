import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, screen, userEvent, waitFor, within } from 'storybook/test';
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from './tooltip';
import { Button } from '../button/button';

/** Tooltip - A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it. */
const meta = {
  component: Tooltip,
  title: 'Components/Tooltip',
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
        <TooltipProvider>
          <Story />
        </TooltipProvider>
      </div>
    ),
  ],
} satisfies Meta<typeof Tooltip>;
export default meta;

type Story = StoryObj<typeof Tooltip>;

/** Default story - Displays a default tooltip */
export const Primary = {
  tags: ['!test'],
  args: {
    children: (
      <>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </>
    ),
  },
} satisfies Story;

/** Tooltip with side prop - Displays a tooltip with the `side` prop set to 'left', 'top', 'bottom', and 'right' */
export const Side = {
  tags: ['!test'],
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      {(["left", "top", "bottom", "right"] as const).map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger asChild>
            <Button variant="outline" className="w-fit capitalize">
              {side}
            </Button>
          </TooltipTrigger>
          <TooltipContent side={side}>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
} satisfies Story;

/** Disabled Button tooltip - Displays a tooltip when the button is disabled by wrapping with a span. */
export const DisabledButton = {
  tags: ['!test'],
  args: {
    children: (
      <>
        <TooltipTrigger asChild>
          <span className="inline-block w-fit">
            <Button variant="outline" disabled>
              Disabled
            </Button>
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>This feature is currently unavailable</p>
        </TooltipContent>
      </>
    ),
  },
} satisfies Story;

/** Tooltip Primary Visual - Verifies the tooltip component renders correctly */
export const PrimaryVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    children: (
      <>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent sideOffset={10}>
          <p>Add to library</p>
        </TooltipContent>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole('button', { name: 'Hover' }));
    await waitFor(() => {
      expect(screen.getByText(/add to library/i)).toBeInTheDocument();
    });
  },
} satisfies Story;
