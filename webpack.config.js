const { resolve } = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: './js/index.js', // точка входа для webpack
    output: {
        filename: 'main.[contenthash].js', // выходной js файл 
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            // правило для экспорта аудио файлов в папку build/audio
            {
                test: /\.(wav|mp3)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'audio',
                    name: '[name].[ext]'
                }
            },
            // правило для экспорта граф файлов в папку build/images
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                    name: '[name].[ext]'
                }
            },
            // правило для экспорта css файлов
            {
                test: /\.css$/i,
                use: [MiniCssExtPlugin.loader, 'css-loader']
            },
            // правило для экспорта sass/scss файлов
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlPlugin({ template: resolve(__dirname, 'index.html') }), // плагин для экспорта index.html

        new MiniCssExtPlugin({                  // плагин для создания css файла
            filename: '[name].[contenthash].css'
        }),

        new BundleAnalyzerPlugin()  // плагин для анализа размера составляющих сборки
    ]
}