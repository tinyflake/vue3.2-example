import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "demo" */ '../App.vue'),
  },
  // {
  //   path: '/',
  //   name: '/jsx',
  //   component: () =>
  //     import(/* webpackChunkName: "demo" */ '../views/jsx/index.vue'),
  // },
  {
    path: '/Dynamic-components',
    name: 'Dynamic-components', //动态组件
    component: () =>
      import(
        /* webpackChunkName: "demo" */ '../views/Dynamic-components/index.vue'
      ),
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
