
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite' // <-- Uncomment this line

export default defineConfig({
  plugins: [react(), tailwindcss()], // <-- Add tailwindcss() here
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})









// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),tailwindcss(),],
  
// })

  