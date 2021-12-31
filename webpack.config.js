const { resolve } = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './index.js', // точка входа для webpack
    output: {
        filename: 'main.[contenthash].js', // выходной js файл 
        path: resolve(__dirname, 'build') //  build - папка итоговой сборки 
    },
    module: {
        rules: [
            // правило для экспорта аудио файлов в папку build/media/audio
            {
                test: /\.(wav|mp3)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'media/audio',
                    name: '[name].[ext]'
                }
            },
            // правило для экспорта видео файлов в папку build/media/video
            {
                test: /\.(mp4)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'media/video',
                    name: '[name].[ext]'
                }
            },
            // правило для экспорта граф файлов в папку build/media/images
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'img-optimize-loader',
                options: {
                    outputPath: 'media/images',
                    name: '[name].[ext]',
                    compress: {  // пареметры сжатия для gif и jpg
                        mode: 'high',
                        disableOnDevelopment: true,
                        gifsicle: {
                            optimizationLevel: 3,
                        },
                        mozjpeg: {
                            progressive: true,
                            quality: 50,
                        },
                    }
                }
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
        })
    ]
}