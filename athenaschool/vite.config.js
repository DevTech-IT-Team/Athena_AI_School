import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

import tailwindcss from "@tailwindcss/vite";

import { visualizer } from "rollup-plugin-visualizer";



export default defineConfig({

  plugins: [

    react(),

    tailwindcss(),

    visualizer({

      filename: "dist/stats.html",

      open: false,

      gzipSize: true,

      brotliSize: true,

    }),

    {

      name: 'service-worker',

      configureServer(server) {

        server.middlewares.use('/sw.js', (req, res, next) => {

          res.setHeader('Content-Type', 'application/javascript');

          res.setHeader('Service-Worker-Allowed', '/');

          next();

        });

      }

    }

  ],

  build: {

    cssCodeSplit: true,

    minify: 'terser',

    sourcemap: false,

    chunkSizeWarningLimit: 500,

    target: 'es2020',

    cssMinify: true,

    reportCompressedSize: true,

    rollupOptions: {

      treeshake: {

        moduleSideEffects: false,

        propertyReadSideEffects: false,

        unknownGlobalSideEffects: false,

      },

      output: {

        manualChunks: (id) => {

          if (id.includes('node_modules')) {

            if (id.includes('react-dom')) {

              return 'vendor-react-dom';

            }

            if (id.includes('react-router')) {

              return 'vendor-router';

            }

            if (id.includes('lucide-react')) {

              return 'vendor-icons';

            }

            if (id.includes('react')) {

              return 'vendor-react';

            }

            return 'vendor';

          }

        },

        assetFileNames: (assetInfo) => {

          if (!assetInfo.name) return 'assets/[name]-[hash][extname]';

          

          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {

            return `assets/media/[name]-[hash][extname]`;

          }

          if (/\.(png|jpe?g|gif|svg|webp|avif)(\?.*)?$/i.test(assetInfo.name)) {

            return `assets/images/[name]-[hash][extname]`;

          }

          if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {

            return `assets/fonts/[name]-[hash][extname]`;

          }

          if (/\.css$/i.test(assetInfo.name)) {

            return `assets/css/[name]-[hash][extname]`;

          }

          return `assets/[name]-[hash][extname]`;

        },

        chunkFileNames: 'assets/js/[name]-[hash].js',

        entryFileNames: 'assets/js/[name]-[hash].js',

      },

    },

    terserOptions: {

      compress: {

        drop_console: true,

        drop_debugger: true,

        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],

        passes: 2,

        ecma: 2020,

      },

      mangle: {

        safari10: true,

      },

      format: {

        comments: false,

        ecma: 2020,

      },

    },

  },

  css: {

    devSourcemap: false,

  },

  publicDir: 'public',

  server: {

    fs: {

      strict: true,

    },

  },

  optimizeDeps: {

    include: ['react', 'react-dom', 'react-router-dom'],

    exclude: ['lucide-react'],

  },

  define: {

    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),

  },

});

