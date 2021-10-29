import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  plugins: [
    vue(),
    Pages(),
    Layouts(),
    Components({
      resolvers: IconsResolver(),
    }),
    Icons({
      compiler: 'vue3',
    }),
    WindiCSS(),
  ],
});
