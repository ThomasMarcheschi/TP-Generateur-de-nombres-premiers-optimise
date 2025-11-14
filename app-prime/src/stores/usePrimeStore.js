import { create } from "zustand";
import { numberIsPrime } from "../services/isPrime.service.js";

const initialState = {
  number: 0,
  isPrime: null,
  primes: [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ],
};

export const usePrimeStore = create((set, get) => ({
  ...initialState,
  setNumber: (n) => set({ number: n, isPrime: null }),

  checkIfPrime: (n) => {
    const value = n ?? get().number;
    const num = Number(value);

    if (Number.isNaN(num)) {
      set({ isPrime: null });
      return;
    }

    set({ isPrime: numberIsPrime(num) });
  },
}));
