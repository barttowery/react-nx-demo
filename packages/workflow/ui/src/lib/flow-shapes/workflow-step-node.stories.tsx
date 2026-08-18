import type { Meta, StoryObj } from '@storybook/react-vite';
import { WorkflowStepNode } from './workflow-step-node';
import {
  ReactFlow,
  type Node,
  Controls,
  Background,
  BackgroundVariant,
  NodeTypes,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { loanWorkflowData } from '@react-nx-demo/workflow-mocks';

const meta = {
  component: WorkflowStepNode,
  title: 'Workflow Step Node',
  decorators: [
    (Story) => (
      <div className="h-dvh" style={{ margin: '-16px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof WorkflowStepNode>;
export default meta;

type Story = StoryObj<typeof WorkflowStepNode>;

const WorkflowNodeComponent = () => {
  const initialNodes: Node[] = [
    {
      id: '1',
      type: 'workflowStepNode',
      position: { x: 100, y: 0 },
      data: { step: loanWorkflowData.steps[0] }
    },
    {
      id: '2',
      type: 'workflowStepNode',
      position: { x: 400, y: 0 },
      data: { step: loanWorkflowData.steps[2] }
    },
    {
      id: '3',
      type: 'workflowStepNode',
      position: { x: 700, y: 0 },
      data: { step: loanWorkflowData.steps[5] }
    },
  ];
  const nodeTypes: NodeTypes = {
    workflowStepNode: WorkflowStepNode,
  };

  return (
    <ReactFlow
      nodes={initialNodes}
      edges={[]}
      fitView
      nodeTypes={nodeTypes}
      defaultEdgeOptions={{
        type: 'angular',
      }}
      connectionLineStyle={{ strokeWidth: 2 }}
      fitViewOptions={{
        padding: 0.2,
        includeHiddenNodes: false,
      }}
      nodesDraggable={false}
      nodesConnectable={false}
      elementsSelectable={true}
      panOnDrag={true}
      zoomOnScroll={true}
    >
      <Controls />
      <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
    </ReactFlow>
  );
}
export const Primary = {
  tags: ['!test'],
  render: () => <WorkflowNodeComponent />,
} satisfies Story;
