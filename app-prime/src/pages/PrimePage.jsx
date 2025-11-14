import React from "react";
import Prime from "../components/GeneratePrime.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CheckPrime from "../components/CheckPrime.jsx";

const queryClient = new QueryClient();

function PrimePage() {
  return (
    <QueryClientProvider client={queryClient}>
      <Prime />
      <CheckPrime />
    </QueryClientProvider>
  );
}

export default PrimePage;
