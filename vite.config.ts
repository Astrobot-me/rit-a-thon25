import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:"./",
  plugins: [react()],
  assetsInclude: ['src/**/**/*.jpg',"**/*.JPG"],
  publicDir: 'public'
})
