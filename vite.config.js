import { defineConfig } from 'vite';
import path from 'path';
import envCompatible from 'vite-plugin-env-compatible';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  // root: './src/examples/',
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname,'src')
      }
    ],
    extensions: [
      '.mjs',
      '.js',
      '.ts',
      '.jsx',
      '.tsx',
      '.json',
      '.vue'
    ]
  },
  plugins: [
    viteCommonjs(),
    envCompatible(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'mini-vue3'
        }
      }
    })
  ],
  mode: 'development',
  build: {
    rollupOptions: {
      input: './src/index.js',
      output: {
        entryFileNames: 'mini-vue.js'
      }
    },
    sourcemap: 'inline',
    outDir: path.resolve(__dirname, 'src/examples/dist')
  },
  server: {
    strictPort: false,
    // base: '/dist/'
    // base: path.resolve(__dirname, './src/examples/')
  }
})
