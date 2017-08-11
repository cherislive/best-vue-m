import App from '@/App'
export default [{
  path: '/',
  component: App, // 顶层路由，对应index.html
  children: [ // 二级路由。对应App.vue
    {
      path: '',
      redirect: '/login'
    }, {
      path: '/detail',
      component: resolve => require(['../page/detail/index'], resolve),  // 顶级页面 加载二级路由
      children: [
        {
          path: '',
          redirect: '/:id'
        }, {
          path: '/detail/:id',
          component: resolve => require(['../page/detail/detail'], resolve)
        }, {
          path: '/detail/res/:id',
          component: resolve => require(['../page/detail/res'], resolve)
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
