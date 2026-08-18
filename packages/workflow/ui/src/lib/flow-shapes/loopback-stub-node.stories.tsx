import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  ReactFlow,
  type Node,
  Controls,
  Background,
  BackgroundVariant,
  NodeTypes,
} from '@xyflow/react';
import { LoopbackStubNode } from './loopback-stub-node';
import '@xyflow/react/dist/style.css';
import { loanWorkflowData } from '@react-nx-demo/workflow-mocks';

const meta = {
  component: LoopbackStubNode,
  title: 'Loopback Stub Node',
  decorators: [
    (Story) => (
      <div className="h-dvh" style={{ margin: '-16px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LoopbackStubNode>;
export default meta;

type Story = StoryObj<typeof LoopbackStubNode>;

const LoopbackStubNodeComponent = () => {
  const initialNodes: Node[] = [
    {
      id: '1',
      type: 'loopbackStubNode',
      position: { x: 100, y: 0 },
      data: { step: loanWorkflowData.steps[3] },
    },
  ];
  const nodeTypes: NodeTypes = {
    loopbackStubNode: LoopbackStubNode,
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
};
export const Primary = {
  render: () => <LoopbackStubNodeComponent />,
} satisfies Story;
