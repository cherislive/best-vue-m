// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import store from './store/'
import VueRouter from 'vue-router'
import routes from './router'
import vueTap from 'v-tap' // 移动端专用
import FastClick from 'fastclick' // 移动端专用
import MintUI from 'mint-ui'
import {routerMode} from './config/env'  // 项目配置
import 'mint-ui/lib/style.css'
import './config/rem'  // 移动端viewport设置
import './mock/index'  // 模拟数据 开发阶段使用

Vue.config.productionTip = false

Vue.use(vueTap)  // 触屏优化
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body)
  }, false)
}
Vue.use(MintUI)

// 正式环境禁用 console
if (process.env.NODE_ENV !== 'development' && !/debug/i.test(window.location.search)) {
  window.console.log = function () {}
}

/* eslint-disable no-new */
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: routerMode,  // 路由使用的 模式
  strict: process.env.NODE_ENV !== 'production'
})

new Vue({
  router
  // ,store
}).$mount('#app')
