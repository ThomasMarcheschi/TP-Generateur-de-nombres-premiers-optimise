import React from "react";
import MiniGame from "../components/MiniGame";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const MiniGamePage = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col gap-4 w-full h-screen bg-gray-500 justify-start pt-40 items-center">
        <MiniGame />
      </div>
    </QueryClientProvider>
  );
};

export default MiniGamePage;
