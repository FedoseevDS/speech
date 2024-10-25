import { resolve } from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5005,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  resolve: {
    extensions: ['.scss', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      components: resolve(__dirname, './src/components'),
      pages: resolve(__dirname, './src/pages')
    }
  }
})
