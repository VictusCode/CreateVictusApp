import { initTRPC } from '@trpc/server';
import superjson from 'superjson';
import { ZodError } from 'zod';

const createTRPCContext = async (opts: { headers: Headers }) => opts;

const trpc = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

const createCallerFactory = trpc.createCallerFactory;
const createTRPCRouter = trpc.router;

const timingMiddleware = trpc.middleware(async ({ next, path }) => {
  const start = Date.now();

  if (trpc._config.isDev) {
    // artificial delay in dev
    const waitMs = Math.floor(Math.random() * 400) + 100;
    await new Promise((resolve) => setTimeout(resolve, waitMs));
  }

  const result = await next();

  const end = Date.now();
  console.log(`[TRPC] ${path} took ${end - start}ms to execute`);

  return result;
});

const publicProcedure = trpc.procedure.use(timingMiddleware);

export { createTRPCContext, createCallerFactory, createTRPCRouter, timingMiddleware, publicProcedure };
