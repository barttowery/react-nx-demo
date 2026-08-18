import { WorkflowDiagram } from '@react-nx-demo/workflow-ui';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@react-nx-demo/shared-ui';
import { loanWorkflowData } from './loan-workflow';

export function WorkflowDisplay() {
  return (
    <div className='flex flex-1 min-h-0 overflow-y-auto flex-col bg-muted'>
      <div className='mx-auto min-h-full w-full py-4 max-w-350 min-[1800px]:max-w-384'>
        <Card className='w-full h-full'>
          <CardHeader>
            <CardTitle>Loan Application Workflow</CardTitle>
            <CardDescription>A visualization demo for the workflow of a loan application process.</CardDescription>
          </CardHeader>
          <CardContent className='w-full h-full'>
            <WorkflowDiagram workflow={loanWorkflowData} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default WorkflowDisplay;
