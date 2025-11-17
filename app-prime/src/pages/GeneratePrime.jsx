import React from "react";
import Prime from "../components/GeneratePrime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const GeneratePrime = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col gap-4 w-full h-screen bg-gray-500 justify-start pt-40 items-center">
        <Prime />
      </div>
    </QueryClientProvider>
  );
};

export default GeneratePrime;
