// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        meble: resolve(__dirname, 'meble.html'),
        tarasy: resolve(__dirname, 'tarasy.html'),
      },
    },
  },
})