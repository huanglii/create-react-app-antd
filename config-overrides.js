const {
  override,
  useBabelRc,
  addPostcssPlugins,
  addLessLoader,
  useEslintRc
} = require('customize-cra')

// process.env.GENERATE_SOURCEMAP = "false";

module.exports = override(
  useBabelRc(),
  addPostcssPlugins([require('autoprefixer')]),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#25b864' }
  }),
  useEslintRc('.eslintrc')
)
