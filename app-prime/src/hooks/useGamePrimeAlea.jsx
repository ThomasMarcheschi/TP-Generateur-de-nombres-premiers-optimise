import { numberSchema } from "../schemas/numberSchema";
import { useQuery } from "@tanstack/react-query";

// Fetch d'un nombre aléatoire entre 0 et 99 999 avec un Timeout très court pour le jeu

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
