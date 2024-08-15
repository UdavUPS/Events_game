const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPluginn = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/common.js',

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPluginn.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new MiniCssExtractPluginn()
    ]
}