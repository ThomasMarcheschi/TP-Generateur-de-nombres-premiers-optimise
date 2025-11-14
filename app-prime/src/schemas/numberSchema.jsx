import { z } from "zod";

export const numberSchema = z.object({
  number: z.number(),
  limit: z.number().optional(),
});
