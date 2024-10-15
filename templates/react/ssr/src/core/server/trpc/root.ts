import { helloWorldRouter as  helloWorld} from '@/modules/helloWorld';
import { createCallerFactory, createTRPCRouter } from '@/core/server/trpc/trpc';

const appRouter = createTRPCRouter({
  helloWorld,
});

type AppRouterType = typeof appRouter;

const createCaller = createCallerFactory(appRouter);

export { appRouter, createCaller };
export type { AppRouterType };
