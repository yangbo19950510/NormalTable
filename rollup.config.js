import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import babel from '@rollup/plugin-babel'
import { resolve as pathResolve } from 'path'
import alias from '@rollup/plugin-alias'
// 这个 rollup-plugin-node-resolve 插件可以告诉 Rollup 如何查找外部模块。 安装它...
import resolve from 'rollup-plugin-node-resolve';

const customResolver = resolve({
  extensions: ['.mjs', '.js', '.jsx', '.json', '.sass', '.scss']
})
module.exports = [
  {
    input: 'src/components/index.js',
    output: [
      // {
      //   file: './dist/my-lib-umd.js',
      //   format: 'umd',
      //   name: 'myLib'   
      //   //当入口文件有export时，'umd'格式必须指定name
      //   //这样，在通过<script>标签引入时，才能通过name访问到export的内容。
      // },
      {
        file: 'dist/es.js',
        format: 'es'
      },
      {
        file: 'dist/cjs.js',
        format: 'cjs'
      }
    ],
    plugins: [
      vue({
        // Dynamically inject css as a <style> tag
        css: true, 
        // Explicitly convert template to render function
        compileTemplate: true
      }),
      commonjs(),
      alias({
        entries: [
          { find: '@', replacement: pathResolve(__dirname, './src') },
        ],
        customResolver
      }),
      resolve(),
      terser(),
      babel({
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue'],
        babelHelpers: 'bundled'
      }),
    ],
    build: {
      lib: {
        entry: pathResolve(__dirname, './src/components/index.js'), // 设置入口文件
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