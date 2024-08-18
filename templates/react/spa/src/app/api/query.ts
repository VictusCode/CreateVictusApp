import { queryConfig } from '@app/configs/api';
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient(queryConfig);

export { queryClient };
