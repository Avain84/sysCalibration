<script setup></script>
<template>
  <main class="min-h-screen flex bg-neutral-99">
    <aside class="hidden lg:block w-1/2 px-12 py-24">
      <div class="flex flex-col gap-7 justify-center items-center">
        <h1 class="text-h1B text-primary-30">
          <a 
            href="#" 
            class="flex gap-4 items-center"
          >
            <img
              src="@/assets/imgs/logo/logo-lg.svg"
              alt="system logo"
              class="w-16 aspect-square"
            >
            設備校驗系統平台
          </a>
        </h1>
        <img
          v-if="true"
          src="../../assets/imgs/illustrator/company.svg"
          alt="company illustration"
        >
        <img
          v-else
          src="../../assets/imgs/illustrator/employee.svg"
          alt="employee illustration"
        >
      </div>
    </aside>
    <section class="w-full lg:w-1/2 bg-fuchsia-600">test</section>
  </main>
</template>
