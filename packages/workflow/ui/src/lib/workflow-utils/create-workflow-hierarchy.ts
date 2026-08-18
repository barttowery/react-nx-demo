import {
  WorkflowStep,
  EdgeTypeToParent,
} from '@react-nx-demo/workflow-models';
import { WorkflowHierarchyNode, NodeType } from './workflow-types';

export const createWorkflowHierarchy = (
  steps: WorkflowStep[],
): WorkflowHierarchyNode | null => {
  // Track which steps have been shown and their positions
  const shownSteps = new Set<number>();
  // The first step will always be the lowest orderNo step
  if (steps.length === 0) return null;
  const startStep = steps[0];

  // Create a map of steps by ID for quick lookup
  const stepMap = new Map(steps.map((s) => [s.stepId, s]));

  const createNewNode = (
    step: WorkflowStep,
    nodeType: NodeType,
    edgeTypeToParent: EdgeTypeToParent,
  ): WorkflowHierarchyNode => {
    const newNode: WorkflowHierarchyNode = {
      step: step,
      nodeType: nodeType,
      edgeTypeToParent: edgeTypeToParent,
      leftItems: [],
      rightItems: [],
      position: { x: 0, y: 0 },
    };
    return newNode;
  };

  // Create Root for WorkflowNode tree
  const workflowStartNode: WorkflowHierarchyNode = createNewNode(
    startStep,
    NodeType.STEP,
    EdgeTypeToParent.NONE,
  );
  shownSteps.add(startStep.stepId);

  // Process child steps in a BFS-like manner (breadth-first search), starting from step 1
  // This queue will hold steps to process, we will add to it as we discover next steps
  // We will start from the starting step, then add the next steps from that step and so on
  const queue: Array<{
    step: WorkflowStep;
    parentNode: WorkflowHierarchyNode;
  }> = [{ step: startStep, parentNode: workflowStartNode }];

  while (queue.length > 0) {
    const current = queue.shift();
    if (!current) continue;
    // Continue if this is a closing step (skip adding children)
    if (current.step.closingStep) continue;

    if (current.step.nextStepYes) {
      //Create and add node for Yes step
      const yesStep = stepMap.get(current.step.nextStepYes.stepId);
      if (yesStep) {
        const stepAlreadyShown = shownSteps.has(yesStep.stepId);
        const newNode = createNewNode(
          yesStep,
          stepAlreadyShown ? NodeType.LOOPBACK : NodeType.STEP,
          EdgeTypeToParent.YES,
        );
        current.parentNode.rightItems.push(newNode);
        if (!stepAlreadyShown) {
          queue.push({ step: yesStep, parentNode: newNode });
          shownSteps.add(yesStep.stepId);
        }
      }
    }
    if (current.step.nextStepNo) {
      //Create and add node for No step
      const noStep = stepMap.get(current.step.nextStepNo.stepId);
      if (noStep) {
        const stepAlreadyShown = shownSteps.has(noStep.stepId);
        const newNode = createNewNode(
          noStep,
          stepAlreadyShown ? NodeType.LOOPBACK : NodeType.STEP,
          EdgeTypeToParent.NO,
        );
        current.parentNode.leftItems.push(newNode);
        if (!stepAlreadyShown) {
          queue.push({ step: noStep, parentNode: newNode });
          shownSteps.add(noStep.stepId);
        }
      }
    }
  }

  return workflowStartNode;
};
