import { create } from "zustand";
import { numberIsPrime } from "../services/isPrime.service.js";
import { is } from "zod/v4/locales";

const initialState = {
  number: 0,
  isPrime: null,
  isDisabled: false,
  buttonPress: "",
};

export const useGamePrimeStore = create((set, get) => ({
  ...initialState,
  setNumber: (n) => set({ number: n, isPrime: null }),

  checkIfPrime: (n) => {
    const value = n ?? get().number;
    const num = Number(value);

    if (Number.isNaN(num)) {
      set({ isPrime: null });
      return;
    }

    set({ isPrime: numberIsPrime(num), isDisabled: true });
  },
  wichButton: (btn) => {
    if (btn === "true") {
      set({ buttonPress: "true" });
    } else {
      set({ buttonPress: "false" });
    }
  },
  reset: () => set({ ...initialState, isDisabled: false }),
}));
