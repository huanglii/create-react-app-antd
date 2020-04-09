const {
  override,
  fixBabelImports,
  useBabelRc,
  addPostcssPlugins,
  addLessLoader,
  addWebpackAlias,
  addWebpackPlugin,
  useEslintRc
} = require('customize-cra')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}

process.env.GENERATE_SOURCEMAP = 'false'

module.exports = override(
  // antd 按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  useBabelRc(),
  addPostcssPlugins([require('autoprefixer')]),

  // less
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#3eaf7c'
    }
  }),
  addWebpackAlias({
    '@': resolve('src')
  }),
  // 使用 Day.js 替换 momentjs 优化打包大小
  addWebpackPlugin(new AntdDayjsWebpackPlugin({
    preset: 'antdv3'
  })),
  useEslintRc('.eslintrc')
)
