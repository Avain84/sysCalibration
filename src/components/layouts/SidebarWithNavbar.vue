<script setup>
import { ref } from 'vue';
import Navbar from '@/components/layouts/Navbar.vue';

const isSidebarOpen = ref(false);
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
  console.log(isSidebarOpen.value);
};
</script>

<template>
  <Navbar
    :is-sidebar-open="isSidebarOpen"
    @toggle-sidebar="toggleSidebar"
  />
  <!-- <Sidebar /> -->
  <!-- <RouterView /> -->
</template>
