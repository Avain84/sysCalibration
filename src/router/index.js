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
      path: '/',
      name: '頁首與側邊選單',
      // redirect: '/dashboard',
      component: () => import('@/components/layouts/SidebarWithNavbar.vue'),
      // children: [
      //   {
      //     path: 'dashboard',
      //     name: '儀錶板',
      //     component: () => import('@/views/Dashboard.vue'),
      //   },
      // ],
    },
    {
      // 未符合路徑導向廠商登入頁
      path: '/:pathMatch(.*)*',
      redirect: '/login/company',
    },
  ],
});

export default router;
