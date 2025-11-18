import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/small-business-website/", 

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "vaul@1.2.2": "vaul",
      "sonner@2.0.3": "sonner",
      "recharts@2.12.5": "recharts",
      "react-resizable-panels@0.0.1": "react-resizable-panels",
      "react-hook-form@7.58.2": "react-hook-form",
      "react-day-picker@8.10.2": "react-day-picker",
      "next-themes@0.4.0": "next-themes",
      "lucide-react": "lucide-react",
      "input-otp@0.2.2": "input-otp",
      // Figma-generated asset alias
      "figma-pack-prebuilt/e6c342178f85cb3fac3b62815dddd7d1f8f45d63.png":
        path.resolve(__dirname, "./src/assets/e6c342178f85cb3fac3b62815dddd7d1f8f45d63.png"),

      "embla-carousel-react@8.0.0": "embla-carousel-react",
      "cmdk@1.1.1": "cmdk",
      "class-variance-authority@0.7.0": "class-variance-authority",
      "@radix-ui/react-tooltip@1.1.2": "@radix-ui/react-tooltip",
      "@radix-ui/react-toggle@1.1.1": "@radix-ui/react-toggle",
      "@radix-ui/react-toggle-group@1.1.2": "@radix-ui/react-toggle-group",
      "@radix-ui/react-tabs@1.1.3": "@radix-ui/react-tabs",
      "@radix-ui/react-switch@1.1.3": "@radix-ui/react-switch",
      "@radix-ui/react-slot@1.1.2": "@radix-ui/react-slot",
      "@radix-ui/react-slider@1.1.1": "@radix-ui/react-slider",
      "@radix-ui/react-separator@1.1.0": "@radix-ui/react-separator",
      "@radix-ui/react-select@2.1.6": "@radix-ui/react-select",
      "@radix-ui/react-scroll-area@1.1.0": "@radix-ui/react-scroll-area",
      "@radix-ui/react-radio-group@1.2.2": "@radix-ui/react-radio-group",
      "@radix-ui/react-progress@1.1.0": "@radix-ui/react-progress",
      "@radix-ui/react-popover@1.1.1": "@radix-ui/react-popover",
      "@radix-ui/react-navigation-menu@1.2.5": "@radix-ui/react-navigation-menu",
      "@radix-ui/react-menubar@1.1.4": "@radix-ui/react-menubar",
      "@radix-ui/react-label@2.1.0": "@radix-ui/react-label",
      "@radix-ui/react-hover-card@1.1.6": "@radix-ui/react-hover-card",
      "@radix-ui/react-dropdown-menu@2.1.2": "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-dialog@1.1.1": "@radix-ui/react-dialog",
      "@radix-ui/react-context-menu@2.1.2": "@radix-ui/react-context-menu",
      "@radix-ui/react-collapsible@1.1.1": "@radix-ui/react-collapsible",
      "@radix-ui/react-checkbox@1.1.3": "@radix-ui/react-checkbox",
      "@radix-ui/react-card@1.1.1": "@radix-ui/react-card",
      "@radix-ui/react-aspect-ratio@1.1.2": "@radix-ui/react-aspect-ratio",
      "@radix-ui/react-alert-dialog@1.1.1": "@radix-ui/react-alert-dialog",
      "@radix-ui/react-accordion@1.2.3": "@radix-ui/react-accordion",
      "@radix-ui/react-avatar@1.1.0": "@radix-ui/react-avatar",
      // root alias
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    target: "esnext",
    outDir: "dist", // ← ДЛЯ GITHUB PAGES
    sourcemap: false,
  },

  server: {
    port: 3000,
    open: true,
  },
});
