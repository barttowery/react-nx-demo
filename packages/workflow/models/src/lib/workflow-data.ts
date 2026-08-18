import { WorkflowStep } from "./workflow-step";

export interface WorkflowData {
  workflowId: number;
  workflowName: string;
  steps: WorkflowStep[];
}