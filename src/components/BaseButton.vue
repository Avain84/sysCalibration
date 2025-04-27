<script setup>
import { computed } from 'vue';

const props = defineProps({
  type: { type: String, required: false, default: 'submit' },
  size: { type: String, required: false, default: 'sm' },
  disabled: { type: Boolean, required: false, default: false },
  role: { type: String, required: true },
});

const sizeStyle = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-7 py-2 text-smB'
    case 'md':
      return 'px-8 py-2 text-h6B'
    case 'lg':
      return 'px-24 py-3 text-h5B'
  }
})

const roleStyle = computed(() => {
  switch (props.role) {
    case 'employee':
      return 'bg-primary-30 text-white border-primary-30 hover:bg-white hover:text-primary-30'
    case 'company':
      return 'bg-tertiary-30 text-white border-tertiary-30 hover:bg-white hover:text-tertiary-30'
    default:
      return 'bg-neutral-30 text-white border-neutral-30 hover:bg-white hover:text-neutral-30'
  }
})
</script>

<template>
  <button
    :type="type"
    class="border rounded-lg cursor-pointer disabled:cursor-not-allowed disabled:bg-neutral-90 disabled:text-white disabled:border-neutral-90"
    :class="[sizeStyle, roleStyle]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>