import { publicProcedure, router } from "./trpc";
import { z } from "zod";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const todoInputType = z.object({
  title: z.string(),
  desciption: z.string(),
});

const appRouter = router({
  createTodo: publicProcedure
    .input(
      z.object({
        title: z.string(),
      })
    )
    .mutation(async (opts) => {
      console.log(opts.ctx.username);
      return {
        id: "1",
      }
    }),
  signUp: publicProcedure
    .input(
      z.object({
        email: z.string(),
        password: z.string(),
      })
    )
    .mutation(async (opts) => {
      const username = opts.ctx.username;
      console.log(username);

      let email = opts.input.email;
      let password = opts.input.password;

      // DB stuffs
      // Do validations
      let token = "1232232";
      return {
        token,
      };
    }),
});

const server = createHTTPServer({
  router: appRouter,
  createContext(opts) {
    let authHeader = opts.req.headers["authorization"];
    console.log(authHeader);
    return {
      username: "1322312",
    };
  },
});

server.listen(3000);

export type AppRouter = typeof appRouter;
