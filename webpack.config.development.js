const path = require('path');
const baseConfig = require('./webpack.config');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const DEVELOPMENT_MODE = 'development';

module.exports = merge(baseConfig, {
    mode: DEVELOPMENT_MODE,
    
    devtool: 'source-map',

    devServer: {
        contentBase: path.join(__dirname, 'build/www'),
        port: 9000,
        historyApiFallback: true,
        hot: true,
        staticOptions: {
            redirect: true
        },
        proxy: {
            '/api': 'http://localhost:5000'
        }
    },

    plugins: [
        new BundleAnalyzerPlugin({
            analyzerHost: 'localhost',
            analyzerPort: 9001,
            openAnalyzer: false
        })
    ]
});