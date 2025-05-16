<script setup>
import { ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import useAlert from '@/composables/useAlert.js';
import useNavigation from '@/composables/useNavigation';
import { getCookie } from '@/utils/cookie.js';
import Navbar from '@/components/layouts/Navbar.vue';
import Sidebar from '@/components/layouts/Sidebar.vue';

const { goToRoute } = useNavigation();

const isSidebarOpen = ref(false);

// 控制側邊選單顯示切換
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

// 監聽螢幕寬度變化
const handleResize = () => {
  isSidebarOpen.value = window.innerWidth >= 1280;
};

onMounted(() => {
  const token = getCookie('token');

  if (!token) {
    useAlert().error('登入過期', '請重新登入');
    goToRoute('companyLogin');
  }

  handleResize();

  // 畫面寬度監聽器
  window.addEventListener('resize', handleResize);
});
</script>

<template>
  <Navbar
    :is-sidebar-open="isSidebarOpen"
    @toggle-sidebar="toggleSidebar"
  />
  <Sidebar :is-sidebar-open="isSidebarOpen" />
  <main class="container grid grid-cols-12 mx-auto">
    <div class="xl:col-start-4 col-span-12 xl:col-span-9 mt-15">
      <RouterView />
    </div>
  </main>
</template>
