const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WorkboxPlugin = require("workbox-webpack-plugin")
//const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    module: {
        rules: [
            {
                test: "/.js$/",
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        // TODO: configure workbox-webpack-plugin
        new WorkboxPlugin.GenerateSW(
            {
                clientsClaim: true,
                skipWaiting: true,
            }
        ),
    ],
    output:{
        libraryTarget: 'var',
        library: 'Client',
    },
}
