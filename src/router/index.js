import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: '登入相關',
      // redirect: '/login/company',
      component: () => import('@/components/layouts/LoginLayout.vue'),
      // children: [
      //   {
      //     path: 'login',
      //     name: '登入頁面',
      //     component: () => import('@/views/auth/loginForm.vue'),
      //   },
      // ],
    },
    {
      // 未符合路徑導向廠商登入頁
      path: '/:pathMatch(.*)*',
      // redirect: '/login/company',
      redirect: '/login',
    },
  ],
});

export default router;
