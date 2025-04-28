import { createRouter, createWebHashHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: '登入相關',
      redirect: '/login/company',
      component: () => import('@/components/layouts/LoginLayout.vue'),
      children: [
        {
          path: 'company',
          name: '廠商登入頁面',
          component: () => import('@/views/auth/CompanyLogin.vue'),
        },
        {
          path: 'employee',
          name: '員工登入頁面',
          component: () => import('@/views/auth/EmployeeLogin.vue'),
        },
      ],
    },
    {
      // 未符合路徑導向廠商登入頁
      path: '/:pathMatch(.*)*',
      redirect: '/login/company',
    },
  ],
});

export default router;
