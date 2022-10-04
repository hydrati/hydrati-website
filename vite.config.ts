import { defineConfig } from 'vite'

import unocss from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'
import directives from '@unocss/transformer-directives'
import compileClass from '@unocss/transformer-compile-class'

import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [unocss({
    presets: [presetUno(), presetIcons({})],
    include: ['src/**/*.tsx', 'src/**/*.vue', 'src/**/*.jsx'],
    transformers: [directives(), compileClass()]
  }), vue(), jsx()],
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
