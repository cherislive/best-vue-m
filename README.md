# best-vue-m

> Mobile peoject for Vue.js

### 技术栈

vue2 + vuex + vue-router + webpack + ES6/7 + fetch + mint-ui

### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

### 目标功能
- [x] 触屏优化 -- 完成
- [x] Router示例 -- 完成
- [x] Router示例 -- 完成



### 项目布局
.
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── dist                                        // 上线项目文件，放在服务器即可正常访问
├── src                                         // 源码目录
│   ├── asstes                                  // 静态资源 图片、css、js等
│   ├── components                              // 组件
│   │   └── common                              // 公共组件
│   │       ├── head.vue                        // 头部公共组件
│   │       └── tab.vue                         // 底部tabbar公共组件
│   ├── config                                  // 基本配置
│   │   ├── env.js                              // 环境切换配置
│   │   ├── fetch.js                            // 获取数据
│   │   ├── filter.js                           // 过滤器
│   │   ├── mUtils.js                           // 常用的js方法
│   │   └── rem.js                              // px转换rem
│   ├── mock                                    // 模拟数据
│   ├── page
│   │   ├── details
│   │   │   └── index.vue
│   │   ├── discover
│   │   │   └── index.vue
│   │   ├── home
│   │   │   └── index.vue
│   │   ├── icenter
│   │   │   └── index.vue
│   │   ├── 404.vue
│   │   └── index.vue
│   ├── router
│   │   └── router.js                           // 路由配置
│   ├── service                                 // 数据交互统一调配
│   │   ├── getData.js                          // 获取数据的统一调配文件，对接口进行统一管理
│   ├── store                                   // vuex的状态管理
│   │   ├── action.js                           // 配置actions
│   │   ├── getters.js                          // 配置getters
│   │   ├── index.js                            // 引用vuex，创建store
│   │   ├── modules                             // store模块
│   │   ├── mutation-types.js                   // 定义常量muations名
│   │   └── mutations.js                        // 配置mutations
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── favicon.ico                                 // 图标
├── index.html                                  // 入口html文件

### License

MIT
