<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import IconButton from '@/components/buttons/IconButton.vue';
</script>

<template>
  <section class="px-3 pt-12 xl:pt-16 pb-8">
    <div class="px-3 border-l-4 border-tertiary-30 flex justify-between items-center">
      <h2 class="text-h4B xl:text-h3B py-2">校驗商管理</h2>
      <Popover class="relative">
        <!-- <PopoverButton>Solutions</PopoverButton> -->
        <PopoverButton>
          <IconButton
            size="sm"
            role="company"
            :filled="false"
          >
            <span class="text-tertiary-30">篩選</span>
            <img
              src="/src/assets/icons/eye-open.svg"
              alt=""
            />
          </IconButton>
        </PopoverButton>

        <PopoverPanel class="absolute z-10 right-0 top-8">
          <div class="grid grid-cols-2">
            <a href="/analytics">Analytics</a>
            <a href="/engagement">Engagement</a>
            <a href="/security">Security</a>
            <a href="/integrations">Integrations</a>
          </div>
        </PopoverPanel>
      </Popover>
    </div>
  </section>
</template>
