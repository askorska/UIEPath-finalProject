const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Is the current build a development build
const IS_DEV = (process.env.NODE_ENV === 'dev');

const dirNode = 'node_modules';
const dirApp = path.join(__dirname, 'app');
const dirAssets = path.join(__dirname, 'assets');

const appHtmlTitle = 'FinalProject';

/**
 * Webpack Configuration
 */
module.exports = {
    entry: {
        bundle: path.join(dirApp, 'index')
    },
    resolve: {
        modules: [
            dirNode,
            dirApp,
            dirAssets
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            IS_DEV: IS_DEV
        }),

        new HtmlWebpackPlugin({
            filename: 'main.html',
            template: path.join(__dirname, 'app/pages/main.html'),
            title: appHtmlTitle
        }),
        new HtmlWebpackPlugin({
            filename: 'product.html',
            template: path.join(__dirname, 'app/pages/product.html'),
            title: appHtmlTitle
        }),

        new HtmlWebpackPlugin({
            filename: 'product-slider.html',
            template: path.join(__dirname, 'app/pages/product-slider.html'),
            title: appHtmlTitle
        })



    ],
    module: {
        rules: [
            // BABEL
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                options: {
                    compact: true
                }
            },

            // STYLES
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: IS_DEV
                        }
                    },
                ]
            },

            // CSS / SASS
            {
                test: /\.scss/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: IS_DEV
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: IS_DEV,
                            includePaths: [dirAssets]
                        }
                    }
                ]
            },

            // IMAGES
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'

                }
            },

            { test: /\.(html)$/,
                include: path.join(__dirname, 'app'),
                use: {
                    loader: 'html-loader',
                    options: {
                        interpolate: true
                    }
                }
            }
        ]
    }
};
