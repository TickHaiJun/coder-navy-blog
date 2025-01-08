import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    mdx({
      providerImportSource: "@mdx-js/react",
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});