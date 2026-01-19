import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'src/main/index.js'),
          tray: resolve(__dirname, 'src/main/tray.js')
        },
        output: {
          dir: 'out/main'
        }
      }
    }
  },

  preload: {
    plugins: [externalizeDepsPlugin()]
  },

  renderer: {
    plugins: [
      react({
        jsxRuntime: 'automatic'
      })
    ]
  }
})
