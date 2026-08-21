import { RouteObject } from 'react-router-dom';
import { SalesHome } from './sales-home';

export const salesRouter: RouteObject[] = [
  {
    index: true,
    element: <SalesHome />,
  },
];
