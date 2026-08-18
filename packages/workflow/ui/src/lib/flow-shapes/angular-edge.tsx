import {
  BaseEdge,
  type EdgeProps,
  type Edge,
  EdgeLabelRenderer,
} from '@xyflow/react';

type AngularEdge = Edge<{ value: number }, 'angular'>;

export function AngularEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  style = {},
  markerEnd,
  label,
  labelStyle,
}: EdgeProps<AngularEdge>) {
  const radius = 8; // Corner radius
  const verticalOffset = 50; // Distance to move before turning horizontally

  // Calculate angular path with rounded corners
  const dx = targetX - sourceX;

  let path = '';
  let labelX = (sourceX + targetX) / 2;
  let labelY = (sourceY + targetY) / 2;

  // Determine routing strategy - simplified for cleaner paths
  if (Math.abs(dx) < 20) {
    // Mostly vertical - straight line
    path = `M ${sourceX} ${sourceY} L ${targetX} ${targetY}`;
    labelX = (sourceX + targetX) / 2;
    labelY = (sourceY + targetY) / 2;
  } else {
    // For horizontal or angular paths: go down, then horizontally, then down
    const midY = sourceY + verticalOffset;
    const sourceEndY = midY;
    const targetStartY = midY;

    // Create path: down from source, rounded corner, horizontal line, rounded corner, down to target
    if (dx > 0) {
      // Target is to the right
      path = `M ${sourceX} ${sourceY} L ${sourceX} ${sourceEndY - radius} Q ${sourceX} ${sourceEndY} ${sourceX + radius} ${sourceEndY} L ${targetX - radius} ${targetStartY} Q ${targetX} ${targetStartY} ${targetX} ${targetStartY + radius} L ${targetX} ${targetY}`;
      // Label on horizontal segment
      labelX = (sourceX + radius + targetX - radius) / 2;
      labelY = midY;
    } else {
      // Target is to the left
      path = `M ${sourceX} ${sourceY} L ${sourceX} ${sourceEndY - radius} Q ${sourceX} ${sourceEndY} ${sourceX - radius} ${sourceEndY} L ${targetX + radius} ${targetStartY} Q ${targetX} ${targetStartY} ${targetX} ${targetStartY + radius} L ${targetX} ${targetY}`;
      // Label on horizontal segment
      labelX = (sourceX - radius + targetX + radius) / 2;
      labelY = midY;
    }
  }

  return (
    <>
      <BaseEdge
        id={id}
        path={path}
        markerEnd={markerEnd}
        style={{
          ...style,
          strokeWidth: 2,
        }}
      />
      {label && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              pointerEvents: 'none',
              zIndex: 10,
              ...labelStyle,
            }}
            className="nodrag nopan bg-card text-[#2F4164] dark:text-foreground"
          >
            {label}
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
}

export default AngularEdge;
