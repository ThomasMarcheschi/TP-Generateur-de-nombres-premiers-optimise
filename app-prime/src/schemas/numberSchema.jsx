import { z } from "zod";

export const numberSchema = z.object({
  limit: z.number().min(1).max(50),
});
