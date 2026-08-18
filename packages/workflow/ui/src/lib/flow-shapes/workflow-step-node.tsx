import { Handle, Position, Node, type NodeProps } from '@xyflow/react';
import { WorkflowStep as WorkflowStepModel } from '@react-nx-demo/workflow-models';
import { StepIndicator } from './step-indicator';

type WorkflowStepNode = Node<
  { step: WorkflowStepModel },
  'WorkflowStep'
>;

export function WorkflowStepNode({ data }: NodeProps<WorkflowStepNode>) {
  const { step } = data;

  return (
    <div className="relative">
      <div className="flex w-60.75 flex-col gap-2.5 rounded-lg border border-border bg-card px-4 py-5 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
        {/* React Flow Handles */}
        <Handle type="target" position={Position.Top} id="top" />
        <Handle type="source" position={Position.Bottom} id="bottom" />

        <div className="flex items-center justify-between gap-2">
          <p className="line-clamp-2 max-h-12.5 text-sm font-semibold text-color-foreground">
            {step.orderNo}. {step.stepName}
          </p>
        </div>
        {/* Divider */}
        <div className="h-0 border-t border-color-border" />

        {/* Notifications */}
        <div className="flex items-center gap-2.5 pl-1.25">
          <p className="flex-1 text-xs font-medium text-color-primary-text">
            {step.notifications.length > 0 ? 
              (<>Notifications: {step.notifications.join(', ')}</>)
              :'Notifications: None'
            }
          </p>
        </div>
      </div>

      {/* Step Indicator */}
      <StepIndicator step={step} />
    </div>
  );
}

export default WorkflowStepNode;
