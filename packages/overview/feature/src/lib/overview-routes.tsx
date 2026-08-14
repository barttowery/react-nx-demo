import { RouteObject } from 'react-router-dom';
import { OverviewHome } from './overview-home/overview-home';

export const overviewRouter: RouteObject[] = [
  {
    index: true,
    element: <OverviewHome />,
  },
];
