import { getQueryClient } from '@/core/api/query';
import { QueryClientProvider } from '@tanstack/react-query';

interface Props {
  children: React.ReactNode;
}

const QueryProvider = ({ children }: Props) => {
  const queryClient = getQueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export { QueryProvider };
