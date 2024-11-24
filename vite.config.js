import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config = defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    TanStackRouterVite({
      generatedRouteTree: "./src/lib/route-tree.ts",
      quoteStyle: "double",
      semicolons: true,
    }),
  ],
});

export default config;
