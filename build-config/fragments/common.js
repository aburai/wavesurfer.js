/* eslint-env node */

const path = require('path');
const webpack = require('webpack');

const rootDir = path.resolve(__dirname, '..', '..');
const pckg = require(path.join(rootDir, 'package.json'));

// inject JS version number
const jsVersionPlugin = new webpack.DefinePlugin({
    __VERSION__: JSON.stringify(pckg.version)
});

module.exports = {
    context: rootDir,
    mode: 'development',
    output: {
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    performance: {
        hints: false
    },
    stats: 'minimal',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },
    plugins: [jsVersionPlugin]
};
