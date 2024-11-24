import { createRouter } from "@tanstack/react-router";

import { queryClient } from "./query-client";
import { routeTree } from "./route-tree";

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
