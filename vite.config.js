import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // Docker mapping port 所需
    strictPort: true,
    port: 8080, // Docker export 出來的 port
  }
})

// 前端顯示的 URL: localhost:3000 (3000 port 可以自己指定)
