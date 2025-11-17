import { createFileRoute } from "@tanstack/react-router";
import GeneratePrime from "../pages/GeneratePrime.jsx";

export const Route = createFileRoute("/generateprime")({
  component: GeneratePrime,
});
