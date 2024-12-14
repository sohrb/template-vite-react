import { createRouter } from "@tanstack/react-router";

import { routeTree } from "@/routes/-route-tree";

import { queryClient } from "./query-client";

export const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
});
