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
        login: path.join(libPath, 'login', 'index.js'),
        typo: path.join(libPath, 'typo', 'index.js'),
        modal: path.join(libPath, 'modal', 'index.js'),
        buttons: path.join(libPath, 'buttons', 'index.js'),
        tables: path.join(libPath, 'tables', 'index.js'),
        forms: path.join(libPath, 'forms', 'index.js')
    },
    output: {
        path: path.join(distPath),
        filename: 'scripts/[name].js'
    },
    module: {
        rules: [
            // {
            //     test: /datatables\.net.*/,
            //     loader: 'imports-loader?define=>false'
            // },
            {
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
            'window.$': 'jquery',
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
        new HtmlWebpackPlugin({
            filename: 'forms/index.html',
            title: pkg.title,
            chunks: ['vendors', 'forms'],
            inject: 'body',
            hash: false,
            pkg: pkg,
            template: path.join(libPath, 'forms', 'index.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'typo/index.html',
            title: pkg.title,
            chunks: ['vendors', 'typo'],
            inject: 'body',
            hash: false,
            pkg: pkg,
            template: path.join(libPath, 'typo', 'index.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'buttons/index.html',
            title: pkg.title,
            chunks: ['vendors', 'buttons'],
            inject: 'body',
            hash: false,
            pkg: pkg,
            template: path.join(libPath, 'buttons', 'index.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'modal/index.html',
            title: pkg.title,
            chunks: ['vendors', 'modal'],
            inject: 'body',
            hash: false,
            pkg: pkg,
            template: path.join(libPath, 'modal', 'index.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'tables/index.html',
            title: pkg.title,
            chunks: ['vendors', 'tables'],
            inject: 'body',
            hash: false,
            pkg: pkg,
            template: path.join(libPath, 'tables', 'index.html')
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};