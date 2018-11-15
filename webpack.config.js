const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PRODUCTION_MODE = 'production';

const outputPath = path.join(__dirname, 'build/www');

const entry = path.join(__dirname, 'src/index.js');

const indexTemplatePath = path.join(__dirname, 'src/index.template.html');

module.exports = {
    mode: PRODUCTION_MODE,

    entry: ['@babel/polyfill', entry],

    output: {
        path: outputPath,
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        publicPath: '/'
    },

    optimization: {
        runtimeChunk: true,
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    enforce: true
                },
            }
        }
    },

    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: indexTemplatePath
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'style.css'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    // 'postcss-loader',
                    'sass-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /(\.png|\.jpg|\.otf|\.json)$/,
                use: ['file-loader?name=[name].[ext]&publicPath=assets/&outputPath=assets/']
            }
        ]
    }
};