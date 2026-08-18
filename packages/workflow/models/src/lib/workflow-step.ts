export interface WorkflowNextStep {
  stepId: number;
};

export interface WorkflowStep {
  stepId: number;
  orderNo: number;
  stepName: string;
  stepDuration: number;
  closingStep: boolean;
  decisionRequired: boolean;
  nextStepYes: WorkflowNextStep | null;
  nextStepNo: WorkflowNextStep | null;
  nextStepsYes: WorkflowNextStep[];
  nextStepsNo: WorkflowNextStep[];
  notifications: string[];
};
