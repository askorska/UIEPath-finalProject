const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Is the current build a development build
const IS_DEV = (process.env.NODE_ENV === 'dev');

const dirNode = 'node_modules';
const dirApp = path.join(__dirname, 'app');
const dirAssets = path.join(__dirname, 'assets');

const appHtmlTitle = 'FinalProject';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * Webpack Configuration
 */
module.exports = {
    entry: {
        vendor: [
            'rangeable'
        ],
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
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
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
        }),

        new HtmlWebpackPlugin({
            filename: 'sample.html',
            template: path.join(__dirname, 'app/pages/sample.html'),
            title: appHtmlTitle
        })



    ],
    module: {
        rules: [
            // BABEL
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },

            // STYLES
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: '../'
                        }
                    },
                    "css-loader"
                ]
            },

            // CSS / SASS
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: true
                        }
                    },
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         plugins: () => [
                    //             require('autoprefixer')
                    //         ],
                    //         sourceMap: true
                    //     }
                    // },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
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
