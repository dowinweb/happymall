/**
 * @Author: dongwei
 * @Date:   2018-02-20 22:56:52
 * @Last modified by:   dongwei
 * @Last modified time: 2018-03-01 22:09:31
 */
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// 环境变量配置 dev/online  开发环境/线上环境
var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev'

// 获取html-webpack-plugin 参数的方法
var getHtmlConfig = function(name, title) {
  return {
    template: './src/view/' + name + '.html',
    filename: 'view/' + name + '.html',
    title: title,
    inject: true,
    hash: true,
    chunks: ['common', name]
  }
}

// 获取webpack config
var config = {
  entry: {
    'common': ['./src/page/common/index.js'],
    'index': ['./src/page/index/index.js'],
    'login': ['./src/page/login/index.js'],
    'result': ['./src/page/result/index.js']
  },
  output: {
    path: __dirname + '/dist',
    // 自动刷新的监听部分
    publicPath: '/dist',
    filename: 'js/[name].js'
  },
  externals: {
    'jquery': 'window.jQuery'
  },
  resolve: {
    alias: {
      node_modules: __dirname + '/node_modules',
      util: __dirname + '/src/util',
      page: __dirname + '/src/page',
      service: __dirname + '/src/service',
      image: __dirname + '/src/image',
    }
  },
  module:{
    loaders:[
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      { test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=100&name=resource/[name].[ext]' },
      { test: /\.string$/, loader: 'html-loader' },

    ]
  },
  plugins: [
    // 独立通用模块 js/base.js
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'js/base.js'
    }),
    // 把css单独打包到文件
    new ExtractTextPlugin("css/[name].css"),
    // html模板的处理
    new HtmlWebpackPlugin(getHtmlConfig('index', '首页')),
    new HtmlWebpackPlugin(getHtmlConfig('login', '用户登录')),
    new HtmlWebpackPlugin(getHtmlConfig('result', '操作结果')),

  ]
};

if ('dev' === WEBPACK_ENV) {
  config.entry.common.push('webpack-dev-server/client?http://localhost:8088/')
}


module.exports = config
