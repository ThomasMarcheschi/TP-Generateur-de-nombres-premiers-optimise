import { createFileRoute } from "@tanstack/react-router";
import MiniGamePage from "../pages/MiniGamePage.jsx";

export const Route = createFileRoute("/minigame")({
  component: MiniGamePage,
});
