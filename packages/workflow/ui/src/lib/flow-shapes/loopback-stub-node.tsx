import { Handle, Position, Node, type NodeProps } from '@xyflow/react';
import { WorkflowStep } from '@react-nx-demo/workflow-models';
import { RefreshCw } from 'lucide-react';

type LoopbackStubNode = Node<
  { step: WorkflowStep },
  'WorkflowStep'
>;

export function LoopbackStubNode({ data }: NodeProps<LoopbackStubNode>) {
  const { step } = data;

  return (
    <div className="relative">
      <div className="flex w-60.75 items-center gap-2.5 rounded-md border border-border bg-card px-3 py-2.5 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
        <Handle type="target" position={Position.Top} id="top" />
        <RefreshCw className='h-4.25 w-4.25 stroke-3 text-primary' />
        <p className="truncate text-sm font-semibold text-foreground">
          {step.orderNo}. {step.stepName}
        </p>
      </div>
    </div>
  );
}

export default LoopbackStubNode;
