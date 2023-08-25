import { defineConfig, loadEnv } from 'vite';
import { resolve } from "path"; // 主要用在 alias 文件路徑别名
import react from '@vitejs/plugin-react-swc';

// const isProduction = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
// export default defineConfig(({mode}) => {
//   const env = loadEnv(mode, process.cwd());

//   return {
//     base: env.VITE_BASE_URL,
//     plugins: [react()],
//     server: {
//       watch: {
//         usePolling: true,
//       },
//       host: true, // Docker mapping port 所需
//       strictPort: true,
//       port: 8080, // Docker export 出來的 port
//     },
//     resolve: {
//       alias: {
//         '@': resolve('./src'),
//         '@weekOne': resolve('./src/week01/'),
//         '@weekTwo': resolve('./src/week02/'),
//       },
//     },
//   }
// });

export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // Docker mapping port 所需
    strictPort: true,
    port: 8080, // Docker export 出來的 port
  },
  resolve: {
    alias: {
      '@': resolve('./src'),
      '@weekOne': resolve('./src/week01/'),
      '@weekTwo': resolve('./src/week02/'),
    },
  },
})

// 前端顯示的 URL: localhost:3000 (3000 port 可以自己指定)
