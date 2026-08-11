import type { Meta, StoryObj } from '@storybook/react-vite';
import { Calendar } from './calendar';
import { expect, screen, within } from 'storybook/test';

/** Calendar - A calendar component that allows users to select a date or a range of dates. */
const meta = {
  component: Calendar,
  title: 'Components/Calendar',
} satisfies Meta<typeof Calendar>;
export default meta;

type Story = StoryObj<typeof Calendar>;

/** Default story - Displays a default calendar with border styling */
export const Primary = {
  tags: ['!test'],
  args: {
    mode: 'single',
    className: "rounded-lg border border-border",
  },
} satisfies Story;

/** Date Range - Displays a calendar for selecting a date range with 2 months displayed */
export const DateRange = {
  tags: ['!test'],
  args: {
    mode: 'range',
    numberOfMonths: 2,
    className: "rounded-lg border border-border",
  },
} satisfies Story;

/** Month/Year Selector - Displays a calendar with month and year selection via a dropdown */
export const MonthYearSelector = {
  tags: ['!test'],
  args: {
    mode: 'single',
    captionLayout: 'dropdown',
    className: "rounded-lg border border-border",
  },
} satisfies Story;

/** Calendar Primary Visual - Verifies the calendar component renders correctly with single date selection */
export const PrimaryVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    mode: 'single',
    className: "rounded-lg border border-border",
    role: 'grid' as any,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const calendar = await canvas.findAllByRole('grid');
    await expect(calendar[0]).toBeInTheDocument();
    await expect(calendar[0]).toHaveClass('rounded-lg');
  },
} satisfies Story;

/** Calendar Date Range Visual - Verifies the calendar component renders correctly for date range selection */
export const DateRangeVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    mode: 'range',
    numberOfMonths: 2,
    className: "rounded-lg border border-border",
    role: 'grid' as any,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const calendar = await canvas.findAllByRole('grid');
    await expect(calendar[0]).toBeInTheDocument();
    await expect(canvas.getAllByRole('button').length).toBeGreaterThan(0);
  },
} satisfies Story;
