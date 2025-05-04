<script setup>
import { ref, onMounted } from 'vue';
import useAlert from '@/composables/useAlert.js';
import useNavigation from '@/composables/useNavigation';
import { getCookie } from '@/utils/cookie.js';
import Navbar from '@/components/layouts/Navbar.vue';
import Sidebar from '@/components/layouts/Sidebar.vue';

const { goToRoute } = useNavigation ();

const isSidebarOpen = ref(false);
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

onMounted(() => {
  const token = getCookie('token');

  if(!token) {
    useAlert().error('登入過期', '請重新登入');
    goToRoute('companyLogin');
  }
});
</script>

<template>
  <Navbar
    :is-sidebar-open="isSidebarOpen"
    @toggle-sidebar="toggleSidebar"
  />
  <Sidebar />
  <!-- <RouterView /> -->
</template>
