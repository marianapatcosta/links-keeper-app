import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    VitePWA({
      base: '/',
      srcDir: 'src',
      filename: 'sw.ts',
      includeAssets: [
        'favicon.svg',
        'favicon.ico',
        'robots.txt',
        'apple-touch-icon.png',
      ],
      strategies: 'injectManifest',
      registerType: 'autoUpdate',
      manifest: {
        name: 'LinksKeeper',
        short_name: 'LinksKeeper',
        theme_color: '#023e83',
        description:
          'Link Keeper is a Progressive Web App developed to group, manage and display all your network links, e-mail and phone numbers in the same place..',
        start_url: '/',
        display: 'standalone',
        background_color: '#06080f',
        icons: [
          {
            src: 'images/android-chrome-48x48.png',
            sizes: '48x48',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'images/android-chrome-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'images/android-chrome-96x96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'images/android-chrome-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'images/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'images/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'images/apple-touch-60x60.png',
            sizes: '60x60',
            type: 'image/png',
          },
          {
            src: 'images/apple-touch-76x76.png',
            sizes: '76x76',
            type: 'image/png',
          },
          {
            src: 'images/apple-touch-120x120.png',
            sizes: '120x120',
            type: 'image/png',
          },
          {
            src: 'images/apple-touch-152x152.png',
            sizes: '152x152',
            type: 'image/png',
          },
          {
            src: 'images/mstile-150x150.png',
            sizes: '150x150',
            type: 'image/png',
          },
        ],
      },
      injectManifest: {
        globPatterns: ['**.{html, js, css, svg, json}', '**'],
        globIgnores: ['**/node_modules/**/*'],
        maximumFileSizeToCacheInBytes: 3000000,
      },
      workbox: {
        cleanupOutdatedCaches: false,
        sourcemap: true,
        globIgnores: ['**/node_modules/**/*'],
      },
    }),
  ],
  esbuild: {
    drop: ['debugger'],
    pure: [
      'console.log',
      'console.error',
      'console.warn',
      'console.debug',
      'console.trace',
    ],
  },
})
