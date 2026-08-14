import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Landing } from '@react-nx-demo/platform-ui';
import { overviewRouter } from '@react-nx-demo/overview-feature';
import { salesRouter } from '@react-nx-demo/sales-feature';
import 'unfonts.css';

import App from './app/app';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: 'overview',
        children: [...overviewRouter],
      },
      {
        path: 'sales',
        children: [...salesRouter],
      },
    ],
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
