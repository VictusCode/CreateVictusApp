import { Suspense } from 'react';
import { routeTree } from '@app/configs/router';
import { queryClient } from '@app/providers/query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { Loader } from '@ui/Loader';

const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const Router = () => (
  <Suspense fallback={<Loader />}>
    <RouterProvider router={router} />
  </Suspense>
);

export { Router };
