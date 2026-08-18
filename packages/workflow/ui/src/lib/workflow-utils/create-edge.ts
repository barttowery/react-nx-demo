import { Edge } from '@xyflow/react';

import { EdgeTypeToParent } from '@react-nx-demo/workflow-models';

export const createEdge = (
  sourceId: string,
  targetId: string,
  edgeType: EdgeTypeToParent,
): Edge => {
  const edgeColor = () => {
    switch (edgeType) {
      case EdgeTypeToParent.YES:
        return '#82e2ac';
      case EdgeTypeToParent.NO:
        return '#fb8e8e';
      default:
        return '#000000';
    }
  };
  const edgeZIndex = () => {
    switch (edgeType) {
      case EdgeTypeToParent.YES:
        return 6;
      case EdgeTypeToParent.NO:
        return 4;
      default:
        return 0;
    }
  };

  // Only show labels on default steps (solid lines) from decision steps, not on manual steps (dotted lines)
  const shouldShowLabel =
    edgeType === EdgeTypeToParent.YES || edgeType === EdgeTypeToParent.NO;
  const labelText =
    edgeType === EdgeTypeToParent.YES
      ? 'Yes'
      : edgeType === EdgeTypeToParent.NO
        ? 'No'
        : '';

  const edge: Edge = {
    id: `${sourceId}-${edgeType}-${targetId}-solid`,
    source: sourceId,
    target: targetId,
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'angular',
    label: shouldShowLabel ? labelText : '',
    labelStyle: {
      fontWeight: 600,
      padding: '2px 4px',
      borderRadius: '4px',
      fontSize: '12px',
    },
    style: {
      stroke: edgeColor(),
      strokeWidth: 2,
    },
    markerEnd: {
      type: 'arrowclosed',
      color: edgeColor(),
    },
    zIndex: edgeZIndex(),
  };
  return edge;
};
