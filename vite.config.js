import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "vite-plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/QR/",
  plugins: [
    react(),
    commonjs({
      filter(id) {
        if (id.includes("node_modules/qrcode-with-logos")) {
          return true;
        }
      },
    }),
  ],
  server: {
    port: 3000,
  },
});
