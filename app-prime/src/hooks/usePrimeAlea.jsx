import { numberSchema } from "../schemas/numberSchema";
import { useQuery } from "@tanstack/react-query";
import { usePrimeStore } from "../stores/usePrimeStore.js";

export function usePrimeAlea() {
  const primes = usePrimeStore((s) => s.primes);

  return useQuery({
    queryKey: ["primeData"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const number = primes[Math.floor(Math.random() * primes.length)];
      const raw = { number, limit: primes.length };
      return numberSchema.parse(raw);
    },
  });
}
