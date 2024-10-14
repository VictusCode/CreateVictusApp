import { queryConfig } from '@app/configs/api';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient(queryConfig);

type Props = {
  children: React.ReactNode;
};

const QueryProvider = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export { QueryProvider, queryClient };
