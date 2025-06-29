import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }: { mode: string }) => ({
  plugins: [
    react(),
    tailwindcss(),
    ...(mode === 'analyze'
      ? [
          visualizer({
            filename: 'dist/stats.html',
            open: true,
            gzipSize: true,
            brotliSize: true,
          }),
        ]
      : []),
  ],

  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@components', replacement: '/src/components' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@config', replacement: '/src/config' },
      { find: '@data', replacement: '/src/data' },
      { find: '@types', replacement: '/src/types' },
      { find: '@motion', replacement: '/src/motion' },
      { find: '@constants', replacement: '/src/constants' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@utils', replacement: '/src/utils' },
      { find: '@services', replacement: '/src/services' },
      { find: '@lib', replacement: '/src/lib' },
    ],
  },

  build: {
    target: 'modules',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['framer-motion', 'react-icons'],
          'data-vendor': ['@tanstack/react-query', '@supabase/supabase-js'],
          'form-vendor': ['react-hook-form', '@emailjs/browser'],
          'utils-vendor': ['es-toolkit', 'xss'],
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.names?.[0] || '';
          const info = name.split('.');
          const ext = info[info.length - 1];
          if (/\.(css)$/.test(name)) {
            return 'assets/css/[name]-[hash].css';
          }
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico|webp)$/i.test(name)) {
            return 'assets/images/[name]-[hash].[ext]';
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(name)) {
            return 'assets/fonts/[name]-[hash].[ext]';
          }
          return `assets/${ext}/[name]-[hash].[ext]`;
        },
      },
    },
    chunkSizeWarningLimit: 500,
    assetsInlineLimit: 4096,
  },

  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      '@tanstack/react-query',
      'react-hook-form',
    ],
  },

  server: {
    port: 3000,
    open: false,
  },

  preview: {
    port: 4173,
    open: false,
  },
}));
