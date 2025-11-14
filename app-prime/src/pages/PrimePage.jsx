import React from "react";
import Prime from "../components/GeneratePrime.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CheckPrime from "../components/CheckPrime.jsx";
import MiniGame from "../components/MiniGame.jsx";

const queryClient = new QueryClient();

function PrimePage() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col gap-4 w-full h-screen bg-gray-500 justify-start pt-40 items-center">
        <Prime />
        <CheckPrime />
        <MiniGame />
      </div>
    </QueryClientProvider>
  );
}

export default PrimePage;
