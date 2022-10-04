import { defineConfig } from 'vite'

import unocss from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'
import directives from '@unocss/transformer-directives'
import compileClass from '@unocss/transformer-compile-class'

import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [unocss({
    presets: [presetUno(), presetIcons({})],
    include: ['src/**/*.tsx', 'src/**/*.vue', 'src/**/*.jsx'],
    transformers: [directives(), compileClass()]
  }), vue(), jsx(), VitePWA({
    registerType: 'autoUpdate',
    devOptions: {
      enabled: true
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg,ts,tsx,woff2,woff,ttf,otf}'],
      runtimeCaching: [{
        urlPattern: /^.*(\.md|\.markdown)$/i,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'articles-cache',
          expiration: {
            maxEntries: 300,
            maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }],
    }
  })],
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    }
  },
  build: {
    target: ['esnext']
  }
})
