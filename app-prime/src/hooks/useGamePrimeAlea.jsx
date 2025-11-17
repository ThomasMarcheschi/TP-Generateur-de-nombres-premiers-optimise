import { numberSchema } from "../schemas/numberSchema";
import { useQuery } from "@tanstack/react-query";

export function useGamePrimeAlea() {
  return useQuery({
    queryKey: ["primeGameData"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const raw = { number: Math.floor(Math.random() * 100000) };
      return numberSchema.parse(raw);
    },
  });
}
