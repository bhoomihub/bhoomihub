import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    include: ["tests/**/*.test.ts"],
    exclude: ["node_modules", ".next", "out", "legacy_v1"]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./")
    }
  }
});
