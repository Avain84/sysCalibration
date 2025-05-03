<script setup>
import { ref } from 'vue';
import IconButton from '@/components/buttons/IconButton.vue';

const isOpen = ref(false);
const sidebarToggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full h-15 shadow-md px-4 py-1.5 flex justify-center items-center"
  >
    <button
      @click="sidebarToggle"
      class="mr-4 xl:hidden relative w-8 h-8 flex flex-col justify-between items-center p-1 group"
    >
      <span
        :class="[
          'block rounded-full h-1 w-full bg-neutral-80 transform transition duration-300',
          { 'rotate-45 translate-y-2.5': isOpen },
          'group-hover:bg-primary-30',
        ]"
      ></span>
      <span
        :class="[
          'block rounded-full h-1 w-full bg-neutral-80 transition duration-300',
          { 'opacity-0': isOpen },
          'group-hover:bg-primary-30',
        ]"
      ></span>
      <span
        :class="[
          'block rounded-full h-1 w-full bg-neutral-80 transform transition duration-300',
          { '-rotate-45 -translate-y-2.5': isOpen },
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
  </header>
</template>
