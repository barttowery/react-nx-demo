import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from './slider';

/** Slider - A component that allows users to select a value from a range of values. */
const meta = {
  component: Slider,
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>;
export default meta;

type Story = StoryObj<typeof Slider>;

/** Default story - Displays an example slider component */
export const Primary = {
  tags: ['!test'],
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: 'mx-auto w-full max-w-xs',
    "aria-label": 'Slider',
  },
} satisfies Story;

/** Range slider story - Displays an example range slider component */
export const Range = {
  tags: ['!test'],
  args: {
    defaultValue: [20, 80],
    max: 100,
    step: 5,
    className: 'mx-auto w-full max-w-xs',
    "aria-label": 'Range Slider',
  },
} satisfies Story;

/** Multi-thumb slider story - Displays an example multi-thumb slider component */
export const MultiThumb = {
  tags: ['!test'],
  args: {
    defaultValue: [10, 50, 90],
    max: 100,
    step: 10,
    className: 'mx-auto w-full max-w-xs',
    "aria-label": 'Multi-Thumb Slider',
  },
} satisfies Story;

/** Vertical slider story - Displays an example vertical slider component */
export const Vertical = {
  tags: ['!test'],
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    orientation: 'vertical',
    className: 'h-40',
    "aria-label": 'Vertical Slider',
  },
} satisfies Story;

/** Disabled slider story - Displays an example disabled slider component */
export const Disabled = {
  tags: ['!test'],
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    disabled: true,
    className: 'mx-auto w-full max-w-xs',
    "aria-label": 'Disabled Slider',
  },
} satisfies Story;
