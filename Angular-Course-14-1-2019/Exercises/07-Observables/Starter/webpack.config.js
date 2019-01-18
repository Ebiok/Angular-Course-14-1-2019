let path = require('path');
let webpack = require('webpack');
let rxPaths = require('rxjs/_esm2015/path-mapping');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/app.ts',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [path.resolve('./src'), 'node_modules'],
        alias: rxPaths()
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/
            }
        ]
    },

    devtool: 'cheap-module-eval-source-map',

    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new UglifyJsPlugin({
            sourceMap: true
        }),
    ]
}