import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: 'lib.ts',
      name: 'luoluo-vue-components',
      formats: ['es'],
      fileName: 'lib',
    },
    rollupOptions: {
      external: ['vue', 'element-plus', '@vueuse/core', '@element-plus/icons-vue'],
    },
  },
});
