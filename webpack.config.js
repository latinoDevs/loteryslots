const {
    resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: {
        index: {
            import: './src/index.js',
            dependOn: 'shared'
        },
        shared: 'lodash'
    },
    output: {
        path: resolve(__dirname, 'dist'),
        chunkFilename: 'bundle[fullhash].js',
        clean: true,
        publicPath: '/'
    },
    resolve: {
        extensions: ['.mjs', '.js', '.jsx', '.json']
    },
    module: {
        rules: [{
                test: /\.(mjs|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader'
                }]
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack']
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'images/[hash]-name.[ext]'
                    }
                }]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserWebpackPlugin()
        ],
        splitChunks: {
            chunks: 'all',
            maxSize: 240000
        }
    },
}