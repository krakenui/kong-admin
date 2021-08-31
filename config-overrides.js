const { override, addLessLoader, addWebpackExternals } = require('customize-cra');

const overrideWebpackProductionExternals = (extenals) => {
    if (process.env.NODE_ENV === 'production') {
        return addWebpackExternals(extenals);
    }

    return addWebpackExternals({});
};

module.exports = override(
    addLessLoader({
        javascriptEnabled: true,
    }),
    overrideWebpackProductionExternals({
        react: 'React',
        'react-dom': 'ReactDOM',
    })
);
