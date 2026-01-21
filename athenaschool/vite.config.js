import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteImagemin({
      gifsicle: { optimizationLevel: 3 },
      optipng: { optimizationLevel: 5 },
      mozjpeg: { quality: 75, progressive: true },
      pngquant: { quality: [0.65, 0.8] },
      webp: { quality: 75 },
      svgo: {
        plugins: [{ name: "removeViewBox", active: false }],
      },
    }),
  ],
});
