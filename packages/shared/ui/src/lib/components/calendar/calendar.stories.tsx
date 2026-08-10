import type { Meta, StoryObj } from '@storybook/react-vite';
import { Calendar } from './calendar';

/** Calendar - A calendar component that allows users to select a date or a range of dates. */
const meta = {
  component: Calendar,
  title: 'Components/Calendar',
} satisfies Meta<typeof Calendar>;
export default meta;

type Story = StoryObj<typeof Calendar>;

/** Default story - Displays a default calendar with border styling */
export const Primary = {
  args: {
    mode: 'single',
    className: "rounded-lg border border-border",
  },
} satisfies Story;

/** Date Range - Displays a calendar for selecting a date range with 2 months displayed */
export const DateRange = {
  args: {
    mode: 'range',
    numberOfMonths: 2,
    className: "rounded-lg border border-border",
  },
} satisfies Story;

/** Month/Year Selector - Displays a calendar with month and year selection via a dropdown */
export const MonthYearSelector = {
  args: {
    mode: 'single',
    captionLayout: 'dropdown',
    className: "rounded-lg border border-border",
  },
} satisfies Story;
