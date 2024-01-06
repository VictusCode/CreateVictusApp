import { RouteProps } from 'react-router-dom';
import Home from '@pages/Home';
import { Route } from './enums/route';

const routesPaths: Record<Route, string> = {
  [Route.Home]: '/',
};

const routesConfig: Record<Route, RouteProps> = {
  [Route.Home]: {
    path: routesPaths[Route.Home],
    element: <Home />,
  },
};

export { Route, routesPaths, routesConfig };
