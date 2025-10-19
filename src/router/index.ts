import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/v-model',
      name: 'v-model',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/v-model/index.vue'),
    },
    {
      path: '/key',
      name: 'key',
      component: () => import('@/views/key/index.vue')
    },
    {
      path: '/premission',
      name: 'premission',
      component: () => import('@/views/premission/index.vue')
    },
    {
      path: '/scssPage',
      name: 'scssPage',
      component: () => import('@/views/scssPage/index.vue')
    },
    {
      path: '/lazyLoadImg',
      name: 'lazyLoadImg',
      component: () => import('@/views/lazyLoadImg/index.vue')
    },
    {
      path: '/lazyLoadImgByDirective',
      name: 'lazyLoadImgByDirective',
      component: () => import('@/views/lazyLoadImgByDirective/index.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/test/index.vue')
    }
  ],
})

export default router
