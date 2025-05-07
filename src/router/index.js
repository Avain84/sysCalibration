import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'loginViews',
      redirect: '/login/company',
      component: () => import('@/components/layouts/LoginLayout.vue'),
      children: [
        {
          path: 'company',
          name: 'companyLogin',
          component: () => import('@/views/auth/CompanyLogin.vue'),
        },
        {
          path: 'employee',
          name: 'employeeLogin',
          component: () => import('@/views/auth/EmployeeLogin.vue'),
        },
      ],
    },
    {
      path: '/',
      name: 'hasLoginView',
      redirect: '/company-management',
      component: () => import('@/components/layouts/SidebarWithNavbar.vue'),
      children: [
        // {
        //   path: 'dashboard',
        //   name: '儀錶板',
        //   // component: () => import('@/views/dashboard/Index.vue'),
        // },
        {
          path: 'company-management',
          name: '校驗商管理',
          component: () => import('@/views/companyManagement/Index.vue'),
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
