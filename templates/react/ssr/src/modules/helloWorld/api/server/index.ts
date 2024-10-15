import { createTRPCRouter, publicProcedure } from '@/core/server/trpc/trpc';
import { z } from 'zod';

const helloWorldRouter = createTRPCRouter({
  hello: publicProcedure.input(z.object({ text: z.string() })).query(({ input }) => {
    return {
      greeting: `Hello ${input.text}`,
    };
  }),
});

export { helloWorldRouter };
