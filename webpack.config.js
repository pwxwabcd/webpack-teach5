const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development', //开发模式，输出文件是否压缩混淆
    entry: './src/index.js', //原文件
    output: {
        filename: 'main.js', //输出文件
        path: path.resolve(__dirname, 'dist'), //输出路径
        publicPath: '/' //webpack-dev-middleware模式路径
    },
    devtool: 'inline-source-map', //显示代码行
    devServer: { //web server模式，端口8080
        contentBase: './dist', //访问路径
        hot: true //HotModuleReplace
    },
    plugins: [
        new CleanWebpackPlugin(['dist']), //自动删除dist文件夹
        new HtmlWebpackPlugin({ //自动生成html文件
            title: '输出管理' //html title
        }),
        new webpack.HotModuleReplacementPlugin() //HotModuleReplace
    ],
    module: {
        rules: [{ //css加载,打包进入main.js文件
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, { //image加载
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }]
    }
};