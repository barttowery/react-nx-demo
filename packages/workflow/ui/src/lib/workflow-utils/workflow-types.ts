import {
  WorkflowStep,
  EdgeTypeToParent,
} from '@react-nx-demo/workflow-models';

export const NodeType = {
  STEP: 'STEP',
  ADDITIONAL_STEP: 'ADDITIONAL_STEP',
  ANY: 'ANY',
  LOOPBACK: 'LOOPBACK',
} as const;

export type NodeType = (typeof NodeType)[keyof typeof NodeType];

export interface WorkflowHierarchyNode {
  step: WorkflowStep;
  nodeType: NodeType;
  edgeTypeToParent: EdgeTypeToParent;
  leftItems: WorkflowHierarchyNode[];
  rightItems: WorkflowHierarchyNode[];
  position: { x: number; y: number };
}
