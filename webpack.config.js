var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './client.js',

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                  loaders: [
                    'isomorphic-style-loader',
                    'css-loader?modules&localIdentName=[name]_[local]_[hash:base64:3]',
                    'postcss-loader'
                  ]
            }
        ]
    },

    output: {
        path: 'src',
        filename: 'scripts/bundle.min.js'
    }

};
