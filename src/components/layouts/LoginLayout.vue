<script setup>
import { computed } from 'vue';
import { RouterView } from 'vue-router';

const pathname = location.pathname;
const isCompany = computed(() => pathname.includes('company'));
</script>

<template>
  <main class="min-h-screen flex bg-neutral-99">
    <aside class="hidden lg:block w-1/2 px-12 py-20">
      <div class="min-h-full flex flex-col gap-7 justify-center items-center">
        <h1 class="text-h1B text-primary-30">
          <a
            href="#"
            class="flex gap-4 items-center"
          >
            <img
              src="@/assets/imgs/logo/logo-lg.svg"
              alt="system logo"
              class="w-16 aspect-square"
            />
            設備校驗系統平台
          </a>
        </h1>
        <img
          v-if="isCompany"
          src="../../assets/imgs/illustrator/company.svg"
          alt="company illustration"
        />
        <img
          v-else
          src="../../assets/imgs/illustrator/employee.svg"
          alt="employee illustration"
        />
      </div>
    </aside>
    <section class="w-full min-h-full lg:w-1/2 flex flex-col gap-8 justify-center items-center">
      <h1 class="text-h2B text-primary-30 lg:hidden">
          <a
            href="#"
            class="flex gap-4 items-center"
          >
            <img
              src="@/assets/imgs/logo/logo-lg.svg"
              alt="system logo"
              class="w-12 aspect-square"
            />
            設備校驗系統平台
          </a>
        </h1>
      <RouterView />
    </section>
  </main>
</template>
