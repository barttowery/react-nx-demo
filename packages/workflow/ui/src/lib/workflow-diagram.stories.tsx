import type { Meta, StoryObj } from '@storybook/react-vite';
import { WorkflowDiagram } from './workflow-diagram';
import { loanWorkflowData } from '@react-nx-demo/workflow-mocks';

const meta = {
  component: WorkflowDiagram,
  title: 'Workflow Diagram',
  decorators: [
    (Story) => (
      <div className="h-dvh" style={{ margin: '-16px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof WorkflowDiagram>;
export default meta;

type Story = StoryObj<typeof WorkflowDiagram>;

export const Primary = {
  args: {
    workflow: loanWorkflowData,
  },
} satisfies Story;
