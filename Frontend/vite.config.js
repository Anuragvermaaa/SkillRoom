import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    proxy: {
      "/users": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
      "/business": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});



