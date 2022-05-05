import { createVuePlugin } from 'vite-plugin-vue2'
import { defineConfig } from "vite"
import legacy from '@vitejs/plugin-legacy'
import vueJsx from '@vitejs/plugin-vue-jsx'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    mainFiles: ['index']
  },
  plugins: [
    createVuePlugin({
      jsx: true
    }),
    vueJsx(),
    legacy({
      // for ie11
      targets: ['ie >= 11', 'chrome >= 42'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      polyfills: ['es.promise.finally', 'es/map', 'es/set'],
      modernPolyfills: ['es.promise.finally'],
    })
  ],
  build: {
    target: 'es2015',
    // target: 'chrome58',
    minify: 'terser',
  }
})