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
      { find: '@styles', replacement: '/src/styles' },
      { find: '@types', replacement: '/src/types' },
      { find: '@motion', replacement: '/src/motion' },
      { find: '@constants', replacement: '/src/constants' },
    ],
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['framer-motion', 'react-icons'],
          'data-vendor': ['@tanstack/react-query', '@supabase/supabase-js'],
          'form-vendor': ['react-hook-form', '@emailjs/browser'],
          'utils-vendor': ['es-toolkit', 'xss'],
        },
      },
    },
    chunkSizeWarningLimit: 500,
  },
}));
