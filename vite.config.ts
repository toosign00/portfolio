import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

const ReactCompilerConfig = {
  target: "19", 
};

export default defineConfig(({ mode }: { mode: string }) => ({
plugins: [
    tailwindcss(), 
    react({
      babel: {
        plugins: [
          ['babel-plugin-react-compiler', ReactCompilerConfig],
        ],
      },
    }),
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
      { find: '@i18n', replacement: '/src/i18n' },
    ],
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-core': ['react', 'react-dom', 'react-router-dom'],
          'vendor-animation': ['motion', 'motion/react'],
          'vendor-ui': ['@radix-ui/react-dialog', 'sonner', '@radix-ui/react-slot', 'react-icons'],
          'vendor-data': ['@tanstack/react-query', '@supabase/supabase-js'],
          'vendor-form': ['react-hook-form', '@hookform/resolvers', 'zod', '@emailjs/browser'],
          'vendor-utils': [
            'es-toolkit',
            'clsx',
            'tailwind-merge',
            'class-variance-authority',
            'i18next',
            'react-i18next',
            'i18next-browser-languagedetector',
            'react-ga4',
          ],
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
  },

  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'motion',
      'motion/react',
      '@radix-ui/react-dialog',
      'sonner',
      '@radix-ui/react-slot',
      '@tanstack/react-query',
      'react-hook-form',
      '@hookform/resolvers/zod',
      'zod',
      '@supabase/supabase-js',
      '@emailjs/browser',
      'i18next',
      'react-i18next',
      'i18next-browser-languagedetector',
      'es-toolkit',
    ],
  },
}));
