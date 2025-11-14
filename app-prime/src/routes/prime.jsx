import { createFileRoute } from "@tanstack/react-router";
import PrimePage from "../pages/PrimePage.jsx";

export const Route = createFileRoute("/prime")({
  component: PrimePage,
});
