import type { Meta, StoryObj } from '@storybook/react-vite';
import { OverviewLayout } from './overview-layout';

const meta = {
  component: OverviewLayout,
  title: 'Overview/Overview Layout',
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', width: '100vw', height: '100vh', margin: '-16px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof OverviewLayout>;
export default meta;

type Story = StoryObj<typeof OverviewLayout>;

export const Primary = {
  args: {},
} satisfies Story;
