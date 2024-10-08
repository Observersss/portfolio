import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  server: {
    open: true,
    host: '0.0.0.0',
  }
})
