import { QueryClient } from '@tanstack/react-query';
import { queryConfig } from '../configs/api';
import { cache } from 'react';

const queryClientFactory = cache(() => new QueryClient(queryConfig))


let clientQueryClientSingleton: QueryClient | undefined = undefined;

const getQueryClient = () => {
  if (typeof window === 'undefined') return queryClientFactory();

  return (clientQueryClientSingleton ??= queryClientFactory());
};

export { queryClientFactory, getQueryClient };
