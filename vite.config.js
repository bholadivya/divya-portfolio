import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// Vite configuration file
// Interview: Used to configure plugins, aliases, build settings, and dev server behavior
// https://vite.dev/config/
export default defineConfig({
  // Plugins extend Vite functionality
  plugins: [react(), tailwindcss()],
  
  // Alias helps avoid long relative imports
  // Example: "@/components/Navbar"
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
