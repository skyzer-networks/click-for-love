import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/click-for-love/', // <-- MUST be top-level
  server: {
    host: true,
    https: true,
  },
})