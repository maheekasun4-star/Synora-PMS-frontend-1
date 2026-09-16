import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
      //  target: 'http://localhost:5000',
       target: 'https://synora-bk-production-71ef.up.railway.app',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
