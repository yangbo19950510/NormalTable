import vue from 'rollup-plugin-vue'
// import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import babel from '@rollup/plugin-babel'
import { resolve } from 'path'

module.exports = [
  {
    input: 'src/components/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'es'
      }
    ],
    plugins: [
      vue({
        // Dynamically inject css as a <style> tag
        css: true, 
        // Explicitly convert template to render function
        compileTemplate: true
      }),
      terser(),
      babel({
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.vue'],
        babelHelpers: 'bundled'
      })
      // commonjs()
    ],
    build: {
      lib: {
        entry: resolve(__dirname, 'lib/main.js'), // 设置入口文件
        name: 'nf-tool', // 起个名字，安装、引入用
        fileName: (format) => `nf-tool.${format}.js` // 打包后的文件名
      }
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
    }
  }
]