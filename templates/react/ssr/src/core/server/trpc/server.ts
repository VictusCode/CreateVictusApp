import { cache } from 'react';
import { createHydrationHelpers } from '@trpc/react-query/rsc';
import { headers } from 'next/headers';
import 'server-only';
import { type AppRouterType, createCaller } from './root';
import { createTRPCContext } from './trpc';
import { getQueryClient } from '@/core/api/query';

const createContext = cache(() => {
  const heads = new Headers(headers());
  heads.set('x-trpc-source', 'rsc');

  return createTRPCContext({
    headers: heads,
  });
});


const caller = createCaller(createContext);

export const { trpc: api, HydrateClient } = createHydrationHelpers<AppRouterType>(caller, getQueryClient);
