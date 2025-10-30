import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
    plugins: [vue()],
    base: './', // 打包为相对路径，便于放到任意静态目录
    server: {
        port: 5173,
        open: false
    },
    build: {
        outDir: 'dist',
        sourcemap: false,
        rollupOptions: {
// 这里可以做额外的 chunk 分析或外部化
        }
    }
})