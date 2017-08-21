import App from '@/App'
export default [{
  path: '/',
  component: App, // 顶层路由，对应index.html
  children: [ // 二级路由。对应App.vue
    {
      path: '',
      redirect: '/default'
    }, {
      path: '/default',
      component: resolve => require(['../page/index'], resolve),  // 顶级页面 加载二级路由
      children: [
        {
          path: '',
          redirect: '/index'
        }, {
          path: '/index',
          component: resolve => require(['../page/home/index'], resolve)
        }, {
          path: '/detail',
          component: resolve => require(['../page/detail/index'], resolve)
        }, {
          path: '/detail/:id',
          component: resolve => require(['../page/detail/detail'], resolve)
        }, {
          path: '/discover',
          component: resolve => require(['../page/discover/index'], resolve)
        }, {
          path: '/icenter',
          component: resolve => require(['../page/icenter/index'], resolve)
        }
      ]
    }, {
      path: '/login',
      component: resolve => require(['../page/login/index'], resolve)
    }, {
      path: '/404',
      component: resolve => require(['../page/404'], resolve)
    }, {
      path: '*',
      redirect: '/404'
    }
  ]
}]
