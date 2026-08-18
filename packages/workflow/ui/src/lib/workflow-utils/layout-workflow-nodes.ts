import { WorkflowHierarchyNode } from './workflow-types';

export const layoutWorkflowNodes = (
  workflowStartNode: WorkflowHierarchyNode,
): WorkflowHierarchyNode => {
  interface RelativePlacement {
    node: WorkflowHierarchyNode;
    x: number;
    y: number;
  }

  interface RowBounds {
    minX: number;
    maxX: number;
  }

  const gridLocationKey = (x: number, y: number): string => `${x},${y}`;

  const canPlaceAtOffset = (
    placement: RelativePlacement[],
    offsetX: number,
    offsetY: number,
    occupied: Set<string>,
  ): boolean => {
    for (let i = 0; i < placement.length; i++) {
      const item = placement[i];
      const key = gridLocationKey(item.x + offsetX, item.y + offsetY);
      if (occupied.has(key)) {
        return false;
      }
    }

    return true;
  };

  const mergePlacement = (
    basePlacement: RelativePlacement[],
    placementToMerge: RelativePlacement[],
    offsetX: number,
    offsetY: number,
    occupied: Set<string>,
  ): void => {
    for (let i = 0; i < placementToMerge.length; i++) {
      const item = placementToMerge[i];
      const mergedX = item.x + offsetX;
      const mergedY = item.y + offsetY;
      basePlacement.push({
        node: item.node,
        x: mergedX,
        y: mergedY,
      });
      occupied.add(gridLocationKey(mergedX, mergedY));
    }
  };

  const getBoundsByRow = (
    placement: RelativePlacement[],
  ): Map<number, RowBounds> => {
    const boundsByRow = new Map<number, RowBounds>();

    for (let i = 0; i < placement.length; i++) {
      const item = placement[i];
      const existing = boundsByRow.get(item.y);

      if (!existing) {
        boundsByRow.set(item.y, {
          minX: item.x,
          maxX: item.x,
        });
        continue;
      }

      if (item.x < existing.minX) {
        existing.minX = item.x;
      }
      if (item.x > existing.maxX) {
        existing.maxX = item.x;
      }
    }

    return boundsByRow;
  };

  const buildPlacement = (node: WorkflowHierarchyNode): RelativePlacement[] => {
    const placement: RelativePlacement[] = [
      {
        node,
        x: 0,
        y: 0,
      },
    ];
    const occupied = new Set<string>([gridLocationKey(0, 0)]);

    const rightLowerBoundaryByRow = new Map<number, number>([[0, 0]]);

    for (let i = 0; i < node.rightItems.length; i++) {
      const rightNode = node.rightItems[i];
      const rightPlacement = buildPlacement(rightNode);
      const rightBoundsByRow = getBoundsByRow(rightPlacement);
      let offsetX = 1;
      let isPlaced = false;

      while (!isPlaced) {
        let requiredShift = 0;

        for (const [row, bounds] of rightBoundsByRow.entries()) {
          const globalRow = row + 1;
          const lowerBoundary = rightLowerBoundaryByRow.get(globalRow);
          if (lowerBoundary === undefined) {
            continue;
          }

          const minXAtOffset = bounds.minX + offsetX;
          if (minXAtOffset <= lowerBoundary) {
            const shift = lowerBoundary - minXAtOffset + 1;
            if (shift > requiredShift) {
              requiredShift = shift;
            }
          }
        }

        if (requiredShift > 0) {
          offsetX += requiredShift;
          continue;
        }

        if (canPlaceAtOffset(rightPlacement, offsetX, 1, occupied)) {
          isPlaced = true;
          continue;
        }

        offsetX++;
      }

      mergePlacement(placement, rightPlacement, offsetX, 1, occupied);

      for (const [row, bounds] of rightBoundsByRow.entries()) {
        const globalRow = row + 1;
        const existing = rightLowerBoundaryByRow.get(globalRow);
        const maxXAtOffset = bounds.maxX + offsetX;
        if (existing === undefined || maxXAtOffset > existing) {
          rightLowerBoundaryByRow.set(globalRow, maxXAtOffset);
        }
      }
    }

    const leftUpperBoundaryByRow = new Map<number, number>();
    for (let i = 0; i < placement.length; i++) {
      const item = placement[i];
      const existing = leftUpperBoundaryByRow.get(item.y);
      if (existing === undefined || item.x < existing) {
        leftUpperBoundaryByRow.set(item.y, item.x);
      }
    }

    for (let i = 0; i < node.leftItems.length; i++) {
      const leftNode = node.leftItems[i];
      const leftPlacement = buildPlacement(leftNode);
      const leftBoundsByRow = getBoundsByRow(leftPlacement);
      let offsetX = -1;
      let isPlaced = false;

      while (!isPlaced) {
        let requiredShift = 0;

        for (const [row, bounds] of leftBoundsByRow.entries()) {
          const globalRow = row + 1;
          const upperBoundary = leftUpperBoundaryByRow.get(globalRow);
          if (upperBoundary === undefined) {
            continue;
          }

          const maxXAtOffset = bounds.maxX + offsetX;
          if (maxXAtOffset >= upperBoundary) {
            const shift = maxXAtOffset - upperBoundary + 1;
            if (shift > requiredShift) {
              requiredShift = shift;
            }
          }
        }

        if (requiredShift > 0) {
          offsetX -= requiredShift;
          continue;
        }

        if (canPlaceAtOffset(leftPlacement, offsetX, 1, occupied)) {
          isPlaced = true;
          continue;
        }

        offsetX--;
      }

      mergePlacement(placement, leftPlacement, offsetX, 1, occupied);

      for (const [row, bounds] of leftBoundsByRow.entries()) {
        const globalRow = row + 1;
        const existing = leftUpperBoundaryByRow.get(globalRow);
        const minXAtOffset = bounds.minX + offsetX;
        if (existing === undefined || minXAtOffset < existing) {
          leftUpperBoundaryByRow.set(globalRow, minXAtOffset);
        }
      }
    }

    return placement;
  };

  const finalPlacement = buildPlacement(workflowStartNode);
  for (let i = 0; i < finalPlacement.length; i++) {
    const item = finalPlacement[i];
    item.node.position = {
      x: item.x,
      y: item.y,
    };
  }

  return workflowStartNode;
};
