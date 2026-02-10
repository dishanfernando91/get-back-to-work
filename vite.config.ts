import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = dirname(fileURLToPath(import.meta.url));

const config = defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        options: resolve(__dirname, "src/options/index.html"),
        popup: resolve(__dirname, "src/popup/index.html"),
      },
    },
  },
});

console.log(config.plugins);

// https://vite.dev/config/
export default config;
