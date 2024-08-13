import { RouteObject } from 'react-router-dom';
import { AppRoutes } from '@/constants';
import Home from '@pages/Home/Home';
import Watch from '@pages/Watch/Watch';
import NotFound from '@pages/NotFound/NotFound';

const routes: RouteObject[] = [
  {
    path: AppRoutes.Home,
    element: <Home />,
  },
  {
    path: AppRoutes.Watch,
    element: <Watch />,
  },
  {
    path: AppRoutes.NotFound,
    element: <NotFound />,
  },
];

export default routes;
