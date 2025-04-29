<script setup>
import { computed } from 'vue';

const props = defineProps({
  type: { type: String, default: 'submit' }, // 按鈕類型
  size: { type: String, required: true }, // 按鈕大小
});

const sizeStyle = computed(() => {
  switch (props.size) {
    case 'full':
      return 'w-full rounded-lg';
    default:
      return 'px-4 rounded-sm';
  }
});
</script>

<template>
  <button
    :type="type"
    class="py-2 cursor-pointer text-base bg-white text-black border border-neutral-80 hover:shadow flex gap-2 justify-center items-center focus:outline-none"
    :class="sizeStyle"
  >
    <slot />
  </button>
</template>
