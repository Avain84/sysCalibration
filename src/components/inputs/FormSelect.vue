<script setup>
import LineArrow from '@/components/icons/LineArrow.vue';
defineProps({
  id: { type: String, required: true },
  name: { type: String, required: true },
  options: { type: Array, required: true },
});
</script>

<template>
  <div class="mb-2 relative flex flex-col">
    <label
      :for="id"
      class="block mb-2 text-h6 text-black"
    >
      <slot name="label"></slot>
    </label>
    <div class="relative w-full h-full">
      <VField
        :id="id"
        :name="name"
        as="select"
        class="block w-full h-full px-2.5 text-base/1 focus:outline-none border border-black rounded-sm focus:border-primary-30"
      >
        <option
          value=""
          disabled
        >
          請選擇
        </option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </VField>
      <LineArrow
        class="text-black bg-white absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none"
      />
    </div>
  </div>
</template>
