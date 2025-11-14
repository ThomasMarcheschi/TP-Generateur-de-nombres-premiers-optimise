import { numberSchema } from "../schemas/numberSchema";
import { useQuery } from "@tanstack/react-query";
import { usePrimeStore } from "../stores/usePrimeStore.js";

export function usePrimeAlea() {
  const { primes } = usePrimeStore((s) => s.primes);
  return useQuery({
    queryKey: ["primeData"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const limit = 1000;
      const raw = { number: Math.floor(Math.random() * primes.length), limit };
      return numberSchema.parse(raw);
    },
  });
}
