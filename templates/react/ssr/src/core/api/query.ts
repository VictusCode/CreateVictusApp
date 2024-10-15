import { QueryClient } from '@tanstack/react-query';
import { queryConfig } from '../configs/api';

const queryClient = new QueryClient(queryConfig);

export { queryClient };
