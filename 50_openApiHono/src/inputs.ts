import { z } from "@hono/zod-openapi"

export const ParamsSchema = z.object({
  id: z.string().min(1).max(10).openapi({
    param: {
      name: "id",
      in: "path"
    },
    example: "1234567890"
  })
})

