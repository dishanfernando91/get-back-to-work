import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const { VITE_MODE } = loadEnv(mode, process.cwd());

  const input =
    VITE_MODE === "DEV"
      ? resolve(__dirname, "src/content/main.tsx")
      : {
          options: resolve(__dirname, "src/options/index.html"),
          popup: resolve(__dirname, "src/popup/index.html"),
          sidePanel: resolve(__dirname, "src/sidePanel/index.html"),
          "content-script": resolve(__dirname, "src/content/content-script.ts"),
          "content-script/main": resolve(__dirname, "src/content/main.tsx"),
          "background-script": resolve(
            __dirname,
            "src/background/service-worker.ts",
          ),
        };
  return {
    plugins: [react()],
    build: {
      outDir: resolve(__dirname, "dist"),
      rollupOptions: {
        input,
        output: {
          entryFileNames: (chunkInfo) => {
            if (chunkInfo.name === "content-script")
              return "content-script/content-script.js";
            if (chunkInfo.name === "content-script/main")
              return "content-script/main.js";
            return "[name]/[name].js";
          },
          chunkFileNames: "[name]/[name].js",
          assetFileNames: "[name]/[name].[ext]",
        },
      },
    },
  };
});

// https://vite.dev/config/
