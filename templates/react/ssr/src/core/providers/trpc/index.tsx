'use client';

import { useState } from 'react';
import { getQueryClient } from '@/core/api/query';
import { type AppRouterType } from '@/core/server/trpc/root';
import { loggerLink, unstable_httpBatchStreamLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server';
import SuperJSON from 'superjson';

export const api = createTRPCReact<AppRouterType>();

export type RouterInputsType = inferRouterInputs<AppRouterType>;

export type RouterOutputsType = inferRouterOutputs<AppRouterType>;

export function TRPCReactProvider(props: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        loggerLink({
          enabled: (op) =>
            process.env.NODE_ENV === 'development' || (op.direction === 'down' && op.result instanceof Error),
        }),
        unstable_httpBatchStreamLink({
          transformer: SuperJSON,
          url: getBaseUrl() + '/api/trpc',
          headers: () => {
            const headers = new Headers();
            headers.set('x-trpc-source', 'nextjs-react');
            return headers;
          },
        }),
      ],
    }),
  );

  return (
    <api.Provider client={trpcClient} queryClient={queryClient}>
      {props.children}
    </api.Provider>
  );
}

const getBaseUrl = () => {
  if (typeof window !== 'undefined') return window.location.origin;

  if (process.env.TRPC_BACKEND_URL) return process.env.TRPC_BACKEND_URL;

  return `http://localhost:${process.env.PORT ?? 3000}`;
};
