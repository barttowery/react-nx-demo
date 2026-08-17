import type { Meta, StoryObj } from '@storybook/react-vite';
import { AppointmentDemo } from './appointment-demo';

const meta = {
  component: AppointmentDemo,
  title: 'Appointment Demo',
} satisfies Meta<typeof AppointmentDemo>;
export default meta;

type Story = StoryObj<typeof AppointmentDemo>;

export const Primary = {
  args: {},
} satisfies Story;
