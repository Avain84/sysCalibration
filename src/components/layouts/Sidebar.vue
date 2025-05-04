<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  isSidebarOpen: Boolean,
});

const links = [
  { name: '儀錶板', path: '/dashboard' },
  { name: '校驗商管理', path: '/company-management' },
  {
    name: '系統設定',
    path: '',
    children: [
      { name: '權限設定', path: '/system/permissions' },
      { name: '偏好設定', path: '/system/preferences' },
    ],
  },
];
const openMenus = ref('');

const toggleMenu = (name) => {
  if (openMenus.value === name) {
    openMenus.value = '';
  } else {
    openMenus.value = name;
  }
};

const isOpen = (name) => openMenus.value === name;
</script>

<template>
  <aside
    class="top-15 left-0 w-full xl:w-1/4 min-h-full shadow-lg"
    :class="isSidebarOpen ? 'fixed' : 'hidden'"
  >
    <ul class="p-4">
      <li
        v-for="link in links"
        :key="link.name"
        class="px-6 py-2"
      >
        <template v-if="link.children && link.children.length > 0">
          <button
            class="text-lg w-full text-left pl-4 border-l-4 border-transparent hover:border-primary-60"
            @click="toggleMenu(link.name)"
          >
            {{ link.name }}
          </button>
          <ul
            v-if="isOpen(link.name)"
            class=""
            :class="
              isOpen(link.name) ? 'block mt-2 px-3 py-3 border-t border-secondary-90' : 'hidden'
            "
          >
            <li
              v-for="child in link.children"
              :key="child.name"
              class="px-3"
            >
              <RouterLink
                :to="child.path"
                class="block text-lg px-3 py-1 rounded-lg border border-transparent hover:border-secondary-90"
              >
                {{ child.name }}
              </RouterLink>
            </li>
          </ul>
        </template>

        <template v-else>
          <RouterLink
            :to="link.path"
            class="text-lg w-full pl-4 border-l-4 border-transparent hover:border-primary-60"
          >
            {{ link.name }}
          </RouterLink>
        </template>
      </li>
    </ul>
  </aside>
</template>
