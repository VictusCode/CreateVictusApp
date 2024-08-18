import { routesPaths } from '@app/configs/router';
import { queryClient } from '@app/providers/query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

const Root = () => {
  return (
    <>
      <Outlet />
      <ReactQueryDevtools buttonPosition='top-right' />
      <TanStackRouterDevtools position='bottom-right' />
    </>
  );
};

export const Route = createRootRouteWithContext<{
  queryClient: typeof queryClient;
}>()({
  component: Root,
});
