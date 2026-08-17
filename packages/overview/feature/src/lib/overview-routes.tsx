import { RouteObject } from 'react-router-dom';
import { OverviewHome } from './overview-home/overview-home';
import About from './about/about';

export const overviewRouter: RouteObject[] = [
  {
    index: true,
    element: <OverviewHome />,
  },
  {
    path: 'about',
    element: <About />,
  }
];
