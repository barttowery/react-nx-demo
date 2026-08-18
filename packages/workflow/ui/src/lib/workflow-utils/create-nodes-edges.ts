import { Edge, Node } from '@xyflow/react';

import { createEdge } from './create-edge';
import { COLUMN_WIDTH, ROW_HEIGHT } from './workflow-constants';
import { WorkflowHierarchyNode, NodeType } from './workflow-types';

export const createNodesEdges = (
  workflowStartNode: WorkflowHierarchyNode,
): { nodes: Node[]; edges: Edge[] } => {
  // Initialize empty arrays for nodes and edges
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  // Build root node
  nodes.push({
    id: workflowStartNode.step.stepId.toString(),
    type: 'workflowStepNode',
    position: workflowStartNode.position,
    zIndex: 10,
    data: { step: workflowStartNode.step },
  });

  const createNode = (
    workflowNode: WorkflowHierarchyNode,
    parentId: string,
  ): string => {
    let nodeId = workflowNode.step.stepId.toString();
    let nodeType = '';
    switch (workflowNode.nodeType) {
      case NodeType.LOOPBACK:
        nodeId = `loopback-${workflowNode.step.stepId}-${parentId}`;
        nodeType = 'loopbackStubNode';
        break;
      case NodeType.STEP:
        nodeId = workflowNode.step.stepId.toString();
        nodeType = 'workflowStepNode';
        break;
      default:
        nodeId = workflowNode.step.stepId.toString();
        nodeType = 'workflowStepNode';
    }
    nodes.push({
      id: nodeId,
      type: nodeType,
      position: {
        x: workflowNode.position.x * COLUMN_WIDTH,
        y: workflowNode.position.y * ROW_HEIGHT,
      },
      zIndex: 10,
      data: { step: workflowNode.step },
    });
    return nodeId;
  };

  const createChildNodesWithEdges = (workflowNode: WorkflowHierarchyNode) => {
    workflowNode.leftItems.forEach((childNode) => {
      const childNodeId = createNode(
        childNode,
        workflowNode.step.stepId.toString(),
      );
      edges.push(
        createEdge(
          workflowNode.step.stepId.toString(),
          childNodeId,
          childNode.edgeTypeToParent,
        ),
      );
      createChildNodesWithEdges(childNode);
    });
    workflowNode.rightItems.forEach((childNode) => {
      const childNodeId = createNode(
        childNode,
        workflowNode.step.stepId.toString(),
      );
      edges.push(
        createEdge(
          workflowNode.step.stepId.toString(),
          childNodeId,
          childNode.edgeTypeToParent,
        ),
      );
      createChildNodesWithEdges(childNode);
    });
  };

  createChildNodesWithEdges(workflowStartNode);
  return { nodes, edges };
};
