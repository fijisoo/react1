const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.s?css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true,
                                    minimize: true
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ],
                        publicPath: "/dist"
                    }),
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin({
                filename: 'style.css',
                disable: false,
                allChunks: true,
            }),
            new UglifyJSPlugin({
                uglifyOptions:{
                    output: {
                      comments: false,
                    },
                    compress: {
                      unused: true,
                      dead_code: true, 
                      warnings: false, 
                      drop_debugger: true,
                      conditionals: true,
                      evaluate: true,
                      drop_console: true, 
                      sequences: true,
                      booleans: true,
                    }
                },
            }),
            new CleanWebpackPlugin(['dist'])
        ]
    });
