<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import apiGetProfile from '@/apis/user/getProfile.js';
import Button from '@/components/Button.vue';
import FilledArrow from '@/components/icons/FilledArrow.vue';

defineProps({
  isSidebarOpen: Boolean,
});
defineEmits(['toggleSidebar']);

const userProfile = ref({
  role: 'company',
  username: '使用者名稱',
});
const isEmployee = ref(false);

const isUserDropdownOpen = ref(false);
const userDropdownRef = ref(null);

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

const getUserProfile = async () => {
  try {
    const res = await apiGetProfile();
    userProfile.value = res.payload;
    isEmployee.value = res.payload.role === 'employee';
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  // 取得使用者資料
  getUserProfile();

  // 監聽點擊事件關閉使用者選單
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
      @click="$emit('toggleSidebar')"
      class="cursor-pointer mr-4 xl:hidden relative w-8 h-8 flex flex-col justify-between items-center p-1 group"
    >
      <span
        class="block rounded-full h-1 w-full transform transition duration-300"
        :class="[
          isEmployee
            ? 'bg-primary-40 group-hover:bg-primary-60'
            : 'bg-tertiary-40 group-hover:bg-tertiary-60',
          { 'rotate-45 translate-y-2.5': isSidebarOpen },
        ]"
      ></span>
      <span
        class="block rounded-full h-1 w-full transition duration-300"
        :class="[
          isEmployee
            ? 'bg-primary-40 group-hover:bg-primary-60'
            : 'bg-tertiary-40 group-hover:bg-tertiary-60',
          { 'opacity-0': isSidebarOpen },
        ]"
      ></span>
      <span
        class="block rounded-full h-1 w-full transform transition duration-300"
        :class="[
          isEmployee
            ? 'bg-primary-40 group-hover:bg-primary-60'
            : 'bg-tertiary-40 group-hover:bg-tertiary-60',
          { '-rotate-45 -translate-y-2.5': isSidebarOpen },
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
      <Button
        type="button"
        size="sm"
        rounded="full"
        :role="userProfile.role"
      >
        <span>{{ userProfile.username }}</span>
        <FilledArrow />
      </Button>
      <ul
        v-if="isUserDropdownOpen"
        class="absolute w-32 right-1/6 mt-2 bg-white shadow-md rounded-md border border-neutral-80 overflow-hidden"
      >
        <li
          class="px-4 py-2 hover:text-white"
          :class="[isEmployee ? 'hover:bg-primary-30' : 'hover:bg-tertiary-30']"
        >
          <a href="#">個人資料</a>
        </li>
        <li
          class="px-4 py-2 hover:bg-primary-30 hover:text-white"
          :class="[isEmployee ? 'hover:bg-primary-30' : 'hover:bg-tertiary-30']"
        >
          <a href="#">登出</a>
        </li>
      </ul>
    </div>
  </header>
</template>
