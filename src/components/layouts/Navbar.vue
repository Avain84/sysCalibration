<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import IconButton from '@/components/buttons/IconButton.vue';

const isSidebarOpen = ref(false);
const isUserDropdownOpen = ref(false);
const userDropdownRef = ref(null);

// 側邊選單按鈕顯示切換
const sidebarToggle = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

// 使用者選單顯示切換
const userDropdownToggle = () => {
  isUserDropdownOpen.value = !isUserDropdownOpen.value;
};

// 點擊其他地方關閉使用者選單
const handleClickOutside = (e) => {
  if (userDropdownRef.value && !userDropdownRef.value.contains(e.target)) {
    isUserDropdownOpen.value = false;
  }
};

// 監聽點擊事件
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

// 解除監聽
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full h-15 shadow-md px-4 py-1.5 flex justify-center items-center"
  >
    <button
      @click="sidebarToggle"
      class="cursor-pointer mr-4 xl:hidden relative w-8 h-8 flex flex-col justify-between items-center p-1 group"
    >
      <span
        :class="[
          'block rounded-full h-1 w-full bg-neutral-80 transform transition duration-300',
          { 'rotate-45 translate-y-2.5': isSidebarOpen },
          'group-hover:bg-primary-30',
        ]"
      ></span>
      <span
        :class="[
          'block rounded-full h-1 w-full bg-neutral-80 transition duration-300',
          { 'opacity-0': isSidebarOpen },
          'group-hover:bg-primary-30',
        ]"
      ></span>
      <span
        :class="[
          'block rounded-full h-1 w-full bg-neutral-80 transform transition duration-300',
          { '-rotate-45 -translate-y-2.5': isSidebarOpen },
          'group-hover:bg-primary-30',
        ]"
      ></span>
    </button>
    <h1 class="mr-auto text-h4B lg:text-h3B text-primary-30">
      <a
        href="/#/system"
        class="flex justify-center items-center gap-4"
      >
        <img
          src="@/assets/imgs/logo/logo-lg.svg"
          alt="system logo"
          class="w-10 lg:w-12 aspect-square"
        />
        <span class="hidden sm:block">設備校驗系統平台</span>
      </a>
    </h1>
    <div
      ref="userDropdownRef"
      class="relative"
      @click="userDropdownToggle"
    >
      <IconButton
        type="button"
        size="sm"
        :role="'employee'"
        rounded="full"
      >
        <span>使用者名稱</span>
        <img
          src="@/assets/icons/filled-arrow-white.svg"
          alt="arrow"
          class="w-2.5 aspect-square"
        />
      </IconButton>
      <ul
        v-if="isUserDropdownOpen"
        class="absolute right-4 mt-2 bg-white shadow-md rounded-md border border-neutral-80 overflow-hidden"
      >
        <li class="px-4 py-2 hover:bg-primary-30 hover:text-white">
          <a href="#">個人資料</a>
        </li>
        <li class="px-4 py-2 hover:bg-primary-30 hover:text-white">
          <a href="#">登出</a>
        </li>
      </ul>
    </div>
  </header>
</template>
