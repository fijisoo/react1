const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
        entry: ['babel-polyfill', './src/app.tsx'],
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'app.bundle.js',
            publicPath: '/',
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'awesome-typescript-loader',
                        options: {
                            useBabel: true,
                        },
                    },
                },
                {
                    test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url-loader?limit=10000&mimetype=application/font-woff'
                },
                {
                    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
                },
                {
                    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
                },
                {
                    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'file-loader'
                }
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                minify: {
                    collapseWhitespace: true,
                    collapseInlineTagWhitespace: true,
                    removeComments: true,
                    removeRedundantAttributes: true
                }
            }),
        ],
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
    };

