import { defaultShouldDehydrateQuery, type QueryClientConfig } from '@tanstack/react-query';
import SuperJSON from 'superjson';

const queryConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 30,
      refetchOnMount: false,
      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
    },
    dehydrate: {
      serializeData: SuperJSON.serialize,
      shouldDehydrateQuery: (query) => defaultShouldDehydrateQuery(query) || query.state.status === 'pending',
    },
    hydrate: {
      deserializeData: SuperJSON.deserialize,
    },
  },
};

export { queryConfig };
