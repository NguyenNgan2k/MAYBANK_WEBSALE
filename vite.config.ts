import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@store": "/src/store",
      "@routes": "/src/routes",
      "@layouts": "/src/layouts",
      "@assets": "/src/assets",
      "@pages": "/src/pages",
      "@utils": "/src/utils",
      "@interface": "/src/interface",
    },
  },
});
