import { createVuePlugin } from 'vite-plugin-vue2'
import { defineConfig } from "vite"
import legacy from '@vitejs/plugin-legacy'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

function resolves(dir) {
  return path.join(__dirname, dir)
}
export default defineConfig({
  resolve: {
    alias: {
      '@': resolves('src')
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
  input: '/src/components/index.js',
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.js'), // 设置入口文件
      name: 'nf-tool', // 起个名字，安装、引入用
      fileName: (format) => `nf-tool.${format}.js` // 打包后的文件名
    },
    sourcemap: true, // 输出.map文件
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    },
    target: 'es2015',
    // target: 'chrome58',
    minify: 'terser',
  }
})