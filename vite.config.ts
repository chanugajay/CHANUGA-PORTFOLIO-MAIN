import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// --- Make sure this matches your GitHub repo name exactly (case-sensitive!)
const repoName = "CHANUGA-PORTFOLIO-MAIN";

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? `/${repoName}/` : '/', // Use repo name in production, root in dev
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
