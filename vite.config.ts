const { defineConfig } = require("vite");
import WindiCSS from "vite-plugin-windicss";

export default defineConfig({
  plugins: [WindiCSS()],
  build: {
    outDir: "build",
  },
});
