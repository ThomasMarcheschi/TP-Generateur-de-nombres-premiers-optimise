import React from "react";
import Prime from "../components/Prime.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function PrimePage() {
  return (
    <QueryClientProvider client={queryClient}>
      <Prime />
    </QueryClientProvider>
  );
}

export default PrimePage;
