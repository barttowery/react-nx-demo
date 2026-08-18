import { RouteObject } from 'react-router-dom';
import WorkflowDisplay from './workflow-display';

export const workflowRouter: RouteObject[] = [
  {
    index: true,
    element: <WorkflowDisplay />,
  },
];
