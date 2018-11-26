const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: "source-map",
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
                'API_URI': JSON.stringify('https://api.onbns.com')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            output: {
              comments: false,
            },
        }),
    ]
})