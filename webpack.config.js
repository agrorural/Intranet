var path = require('path'),
    libPath = path.join(__dirname, 'assets'),
    distPath = path.join(__dirname, 'dist'),
    pkg = require('./package.json'),
    webpack = require("webpack"),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    etp = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

var extractPlugin = new etp({
    filename: 'styles/main.css'
});

module.exports = {
    entry: {
        vendors: path.join(libPath, 'vendors.js'),
        index: path.join(libPath, 'index', 'index.js'),
        login: path.join(libPath, 'login', 'index.js')
    },
    output: {
        path: path.join(distPath),
        filename: '[name].js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: [{
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: false
                    }
                }],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]',
                        publicPath: '../'
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                        publicPath: '../'
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        }),
        extractPlugin,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['vendors', 'index'],
            inject: 'body',
            hash: false,
            pkg: pkg,
            template: path.join(libPath, 'index', 'index.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'login/index.html',
            title: pkg.title,
            chunks: ['vendors', 'login'],
            inject: 'body',
            hash: false,
            pkg: pkg,
            template: path.join(libPath, 'login', 'index.html')
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};