import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config = defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    TanStackRouterVite({
      generatedRouteTree: "./src/routes/-route-tree.ts",
      quoteStyle: "double",
      semicolons: true,
    }),
  ],
  build: {
    cssMinify: "lightningcss",
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "tanstack-vendor": [
            "@tanstack/react-query",
            "@tanstack/react-router",
          ],
        },
      },
    },
  },
});

export default config;
