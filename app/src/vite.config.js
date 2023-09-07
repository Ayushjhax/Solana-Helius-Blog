import { defineConfig } from 'vite'
import { resolve } from 'path'

import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{
      find: "src", replacement: resolve(__dirname, "src")
    }]
  },
  build: {
		minify: 'esbuild',
		target: "esnext"
	},
  define: {
    'process.env': {}
  }
})
