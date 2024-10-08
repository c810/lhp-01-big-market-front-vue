import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';
import path from 'path';

// 获取当前文件的目录
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const url = 'http://117.72.86.192:8091'; // 后端地址
// const url = 'http://localhost:8091'; // 后端地址
console.log('Proxy target URL:', url); // 调试信息
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: url, // 需要代理的后端地址
        changeOrigin: true, // 允许跨域
        // 如果需要重写路径，可以取消注释下面这行
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 设置别名
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
      },
    },
  },

});