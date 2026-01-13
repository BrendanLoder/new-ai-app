import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [  
    react(),
    tailwindcss()
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:3000',

      // meaning /api/hello -> http://localhost:3000/api/hello

      // dont know why I had to put this and the video didn't but ok...
      '/': 'http://localhost:3000'
    }
  }
})
