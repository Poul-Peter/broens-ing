import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/broens-ing/",
  css: {
    devSourcemap: true,
  },
  plugins: [vue()],
});
