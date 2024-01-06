import { queryConfig } from '@app/configs/query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient(queryConfig);

type QueryProviderProps = {
  children: React.ReactNode;
};

const QueryProvider = ({ children }: QueryProviderProps) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export { QueryProvider, queryClient };
