import type { Meta, StoryObj } from '@storybook/react-vite';
import AboutUs from './about-us';
import { aboutusDataMock, statisticsCounterMock } from '@react-nx-demo/sales-mocks';

const meta = {
  component: AboutUs,
  title: 'About Us',
} satisfies Meta<typeof AboutUs>;
export default meta;

type Story = StoryObj<typeof AboutUs>;

export const Primary = {
  args: {
    aboutusData: aboutusDataMock,
    statisticsCounter: statisticsCounterMock,
  },
} satisfies Story;
