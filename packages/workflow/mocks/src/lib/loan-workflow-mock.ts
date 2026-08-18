import { WorkflowData } from '@react-nx-demo/workflow-models';

export const loanWorkflowData: WorkflowData = {
  workflowId: 1,
  workflowName: 'Bank Loan Approval Process',
  steps: [
    {
      stepId: 1,
      orderNo: 1,
      stepName: 'Loan Application Submitted',
      stepDuration: 0,
      closingStep: false,
      decisionRequired: true,
      nextStepYes: {
        stepId: 2
      },
      nextStepNo: null,
      nextStepsYes: [],
      nextStepsNo: [],
      notifications: ['Loan Officer']
    },
    {
      stepId: 2,
      orderNo: 2,
      stepName: 'All Information Provided',
      stepDuration: 0,
      closingStep: false,
      decisionRequired: true,
      nextStepYes: {
        stepId: 4
      },
      nextStepNo: {
        stepId: 3
      },
      nextStepsYes: [],
      nextStepsNo: [],
      notifications: []
    },
    {
      stepId: 3,
      orderNo: 3,
      stepName: 'Request Missing Information',
      stepDuration: 3,
      closingStep: false,
      decisionRequired: false,
      nextStepYes: {
        stepId: 2
      },
      nextStepNo: {
        stepId: 3
      },
      nextStepsYes: [],
      nextStepsNo: [],
      notifications: ['Customer']
    },
    {
      stepId: 4,
      orderNo: 4,
      stepName: 'Information Verified',
      stepDuration: 0,
      closingStep: false,
      decisionRequired: true,
      nextStepYes: {
        stepId: 5
      },
      nextStepNo: {
        stepId: 3
      },
      nextStepsYes: [],
      nextStepsNo: [],
      notifications: ['Loan Underwriter']
    },
    {
      stepId: 5,
      orderNo: 5,
      stepName: 'Approve Loan',
      stepDuration: 0,
      closingStep: false,
      decisionRequired: true,
      nextStepYes: {
        stepId: 7
      },
      nextStepNo: {
        stepId: 6
      },
      nextStepsYes: [],
      nextStepsNo: [],
      notifications: ['Loan Supervisor', 'Customer']
    },
    {
      stepId: 6,
      orderNo: 6,
      stepName: 'Reject Loan',
      stepDuration: 0,
      closingStep: true,
      decisionRequired: false,
      nextStepYes: null,
      nextStepNo: null,
      nextStepsYes: [],
      nextStepsNo: [],
      notifications: ['Customer']
    },
    {
      stepId: 7,
      orderNo: 7,
      stepName: 'Loan Closed and Funded',
      stepDuration: 0,
      closingStep: true,
      decisionRequired: false,
      nextStepYes: null,
      nextStepNo: null,
      nextStepsYes: [],
      nextStepsNo: [],
      notifications: ['Loan Supervisor', 'Customer']
    },
  ],
};
