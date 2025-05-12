<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import Button from '@/components/Button.vue';
import LineArrow from '@/components/icons/LineArrow.vue';
import FormInput from '@/components/inputs/FormInput.vue';
</script>

<template>
  <section class="px-3 pt-12 xl:pt-16 pb-8">
    <div class="relative px-3 border-l-4 border-tertiary-30 flex justify-between items-center">
      <h2 class="text-h4B xl:text-h3B py-2">校驗商管理</h2>
      <Popover>
        <PopoverButton class="focus:outline-none">
          <Button
            type="button"
            size="sm"
            role="company"
            :filled="false"
          >
            <span>篩選</span>
            <LineArrow />
          </Button>
        </PopoverButton>
        <PopoverPanel class="absolute z-10 right-0 left-0 top-16 px-3">
          <VForm
            class="px-6 py-4 border border-neutral-60 rounded-2xl grid grid-cols-9 gap-x-8 gap-y-3"
          >
            <FormInput
              name="status"
              label="啟用狀態"
              id="status"
              rule="required"
              class="col-span-9 md:col-span-3"
            />
            <FormInput
              name="status"
              label="廠商名稱"
              id="status"
              rule="required"
              class="col-span-9 md:col-span-6"
            />
            <FormInput
              name="status"
              label="廠商統編"
              id="status"
              rule="required"
              class="col-span-9 md:col-span-3"
            />
            <FormInput
              name="status"
              label="窗口電話"
              id="status"
              rule="required"
              class="col-span-9 md:col-span-3"
            />
            <Button
              size="md"
              role="company"
              class="col-span-9 md:col-span-2 md:col-end-10 mb-2 self-end"
            >
              搜尋
            </Button>
          </VForm>
        </PopoverPanel>
      </Popover>
    </div>
  </section>
</template>
