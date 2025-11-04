import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    minify: "esbuild",
    target: "esnext",
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["lucide-react", "aos"],
        },
      },
    },
    // equivalent to terser compress options
    esbuild: {
      drop: ["console", "debugger"],
    },
  },
  server: {     
    host: true,
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});
