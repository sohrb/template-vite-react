import type { router } from "@/lib";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
