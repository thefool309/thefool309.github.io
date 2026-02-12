import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Home Page' },
    },
    {
      path: '/projects',
      name: 'proj',

      children: [
        {
          path: '',
          name: 'proj-landing-page',
          component: () => import('../views/ProjLandingView.vue'),
        },
        {
          path: '/projects/life-leveling',
          name: 'life-leveling',
          component: () => import('../views/LifeLevelingView.vue'),
        },
        {
          path: '/projects/pisage',
          name: 'pisage',
          component: () => import('../views/PiSageView.vue'),
        },
        {
          path: '/projects/fastapi',
          name: 'fastapi',
          component: () => import('../views/FastAPIView.vue'),
        },
        {
          path: '/projects/smoking-is-bad',
          name: 'smokingisbad',
          component: () => import('../views/SmokingIsBadView.vue'),
        },
        {
          path: '/projects/civ-sculptor',
          name: 'civ-sculptor',
          component: () => import('@/views/CivSculptorView.vue'),
        },
      ],
    },
    {
      path: '/contact',
      name: 'contact-page',
      component: () => import('@/views/ContactPageView.vue'),
    },
  ],
})

export default router
