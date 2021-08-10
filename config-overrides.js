const { override, addLessLoader, addWebpackExternals } = require('customize-cra');

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
  }),
  addWebpackExternals({
    react: 'React',
    'react-dom': 'ReactDOM',
  })
);
