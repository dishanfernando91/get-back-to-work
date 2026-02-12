import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = dirname(fileURLToPath(import.meta.url));

const config = defineConfig({
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        options: resolve(__dirname, "src/options/index.html"),
        popup: resolve(__dirname, "src/popup/index.html"),
        sidePanel: resolve(__dirname, "src/sidePanel/index.html")
      },
    },
  },
});

// https://vite.dev/config/
export default config;
