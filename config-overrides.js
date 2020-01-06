const {
  override,
  fixBabelImports,
  addLessLoader,
  useEslintRc
} = require('customize-cra');

// process.env.GENERATE_SOURCEMAP = "false";

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#25b864' },
  }),
  useEslintRc('.eslintrc')
);
