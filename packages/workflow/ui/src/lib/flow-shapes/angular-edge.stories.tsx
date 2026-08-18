import type { Meta, StoryObj } from '@storybook/react-vite';
import { AngularEdge } from './angular-edge';
import {
  ReactFlow,
  type Node,
  type Edge,
  Controls,
  Background,
  BackgroundVariant,
  NodeTypes,
} from '@xyflow/react';
import { LoopbackStubNode } from './loopback-stub-node';
import { WorkflowStepNode } from './workflow-step-node';
import { createEdge } from '../workflow-utils/create-edge';
import { loanWorkflowData } from '@react-nx-demo/workflow-mocks';
import { EdgeTypeToParent } from '@react-nx-demo/workflow-models';
import '@xyflow/react/dist/style.css';

const meta = {
  component: AngularEdge,
  title: 'Angular Edge',
  decorators: [
    (Story) => (
      <div className="h-dvh" style={{ margin: '-16px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AngularEdge>;
export default meta;

type Story = StoryObj<typeof AngularEdge>;

const AngularEdgeExampleComponent = () => {
  const initialNodes: Node[] = [
    {
      id: '1',
      type: 'workflowStepNode',
      position: { x: 400, y: 0 },
      data: { step: loanWorkflowData.steps[1] },
    },
    {
      id: '2',
      type: 'workflowStepNode',
      position: { x: 100, y: 300 },
      data: { step: loanWorkflowData.steps[2] },
    },
    {
      id: '3',
      type: 'workflowStepNode',
      position: { x: 700, y: 300 },
      data: { step: loanWorkflowData.steps[3] },
    },
  ];
  const edges: Edge[] = [];
  edges.push(createEdge('1', '2', EdgeTypeToParent.NO));
  edges.push(createEdge('1', '3', EdgeTypeToParent.YES));
  const nodeTypes: NodeTypes = {
    workflowStepNode: WorkflowStepNode,
    loopbackStubNode: LoopbackStubNode,
  };

  return (
    <ReactFlow
      nodes={initialNodes}
      edges={edges}
      fitView
      nodeTypes={nodeTypes}
      edgeTypes={{
        angular: AngularEdge,
      }}
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
};
export const Primary = {
  render: () => <AngularEdgeExampleComponent />,
} satisfies Story;
