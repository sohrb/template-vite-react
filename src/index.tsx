import "./styles/globals.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { queryClient, router } from "./configs";
import { ThemeProvider } from "./providers";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find the root element");
}

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
