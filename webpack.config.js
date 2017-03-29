/**
 * Created by cinque on 2017/3/29.
 */
var webpack = require('webpack');
var path = require('path');
module.exports = {
    //ultrasonic模块
    entry: {
        'index': __dirname + '/src/js/index.jsx'
    },
    output: {
        path: __dirname + '/assets',
        filename: 'js/[name].js'
    },
    devtool: "eval-source-map",
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },{
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000'
        },{
            test: /\.svg$/,
            loader: 'url?limit=100000'
        }]
    },
    devServer: {
        contentBase: "./assets",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
};