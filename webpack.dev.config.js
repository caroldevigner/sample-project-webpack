const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const config = [
    {
        context: path.resolve(__dirname, 'src'),
        entry: {
            app: './scripts/app.js',
            custom: './scripts/custom.js',
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: "js/[name].js",
            chunkFilename: 'js/[name].js',
        },
        optimization: {
            runtimeChunk: 'single',
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        ecma: 5,
                        keep_classnames: true,
                        keep_fnames: true,
                        module: true,
                        toplevel: true,
                        ie8: true,
                        safari10: true,
                        output: {
                            beautify: true,
                            webkit: true
                        }
                    },
                    extractComments: 'all',
                }),
            ],
            splitChunks: {
                chunks: 'all',
                maxInitialRequests: Infinity,
                minSize: 0,
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors'
                    },
                },
            },
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