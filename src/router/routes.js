// src/router/routes.js
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: { level: 1 }
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('@/views/About.vue'),
  //   meta: { level: 2 }
  // },
  // 其他路由
]

export default routes