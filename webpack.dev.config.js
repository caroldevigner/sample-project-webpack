const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const config = [
    {
        context: path.resolve(__dirname, 'src'),
        entry: {
            app: './scripts/app.js',
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: "js/[name].js",
            chunkFilename: 'js/[name].js',
        },
        devServer: {
            port: 3000,
            contentBase: path.resolve(__dirname, 'dist'),
        },
        devtool: 'source-map', // any "source-map"-like devtool is possible
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.$': 'jquery',
                'window.jQuery': 'jquery'
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,  
                    include: [
                        path.resolve(__dirname, 'src/scripts')
                    ],
                    exclude: /node_modules/,
                    use: [
                        {  
                            loader: 'babel-loader',  
                            options: {  
                                presets: [
                                    [
                                        "@babel/preset-env",
                                        {
                                            "targets": {
                                                "esmodules": true,
                                                "browsers": ["last 2 versions", "ie >= 7"]
                                            }
                                        }
                                    ]
                                ],
                                cacheDirectory: true  
                            }  
                        },
                    ]
                }
            ]
        },
        resolve: {
            modules: [path.resolve(__dirname, 'node_modules')],
            extensions: ['.js', '.json', '.scss' , '.css'],
            extensions: ['.js'],
            alias: {
                source: path.resolve(__dirname, '../src'), // Relative path of src
                images: path.resolve(__dirname, '../src/assets/images'), // Relative path of images
                fonts: path.resolve(__dirname, '../src/assets/fonts'), // Relative path of fonts
            }
        },
    }
];

module.exports = config;