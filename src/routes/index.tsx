import { RouteObject } from 'react-router-dom';
import { AppRoutes } from '@/constants';
import Home from '@pages/Home/Home';
import Watch from '@pages/Watch/Watch';
import History from '@pages/History/History';
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
    path: AppRoutes.History,
    element: <History />,
  },
  {
    path: AppRoutes.NotFound,
    element: <NotFound />,
  },
];

export default routes;
