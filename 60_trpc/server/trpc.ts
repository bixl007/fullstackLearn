import { initTRPC } from "@trpc/server";

const t = initTRPC.context<{
    username?: string;
}>().create();

export const router = t.router;
export const publicProcedure = t.procedure;