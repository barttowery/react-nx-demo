import type { Meta, StoryObj } from '@storybook/react-vite';
import { AboutSkills } from './about-skills';

const meta = {
  component: AboutSkills,
  title: 'About/Skills',
} satisfies Meta<typeof AboutSkills>;
export default meta;

type Story = StoryObj<typeof AboutSkills>;

export const Primary = {
  args: {},
} satisfies Story;
