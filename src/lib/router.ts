import { createRouter } from "@tanstack/react-router";

import { routeTree } from "@/routes/-route-tree";

import { queryClient } from "./query-client";

const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export { router };
