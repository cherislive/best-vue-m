var path = require('path') // 使用 NodeJS 自带的文件路径插件
var utils = require('./utils')  // 引入一些小工具
var config = require('../config') // 引入 config/index.js
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {   // 拼接我们的工作区路径为一个绝对路径
  return path.join(__dirname, '..', dir)
}

module.exports = {
  // entry: {app: ['babel-polyfill', './src/main.js']},
  entry: {
    // 'babel-polyfill': 'babel-polyfill',
    app: './src/main.js'  // 编译文件入口
  },
  output: {
    path: config.build.assetsRoot,   // 编译输出的静态资源根路径
    filename: '[name].js',   // 编译输出的文件名
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath  //  正式发布环境下编译输出的上线路径的根路径
  },
  resolve: {
    // 自动补全的扩展名
    extensions: ['.js', '.vue', '.json'],
    modules: [
      resolve('src'),
      resolve('node_modules')
    ],
    alias: {
      // 默认路径代理，例如 import Vue from 'vue'，会自动到 'vue/dist/vue.common.js'中寻找
      'vue$': 'vue/dist/vue.esm.js',
      'src': resolve('src'),
      '@': resolve('src')
    }
  },
  module: {
    // 预处理的文件及使用的 loader
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          // eslint 代码检查配置工具
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
