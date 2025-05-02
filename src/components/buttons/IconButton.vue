<script setup>
import { computed } from 'vue';

const props = defineProps({
  type: { type: String, default: 'submit' }, // 按鈕類型
  size: { type: String, required: true }, // 按鈕大小
  role: { type: String, default: 'default' }, // 按鈕類型
  rounded: { type: String, default: 'sm' }, // 圓角大小
  filled: { type: Boolean, default: true }, // 按鈕樣式類型
});

const sizeStyle = computed(() => {
  switch (props.size) {
    case 'full':
      return 'w-full gap-2';
    case 'sm':
      return 'px-4 gap-1';
  }
});

const roundedStyle = computed(() => {
  switch (props.rounded) {
    case 'full':
      return 'rounded-full';
    case 'lg':
      return 'rounded-lg';
    default:
      return 'rounded-sm';
  }
});

const filledStyle = computed(() => {
  const colorMap = {
    employee: 'primary',
    company: 'tertiary',
    common: 'neutral',
  };

  const color = colorMap[props.role] || 'neutral';
  const baseColor = `${color}-30`;
  const shadowColor = `${color}-80/50`;

  if (props.filled) {
    return `bg-${baseColor} text-white border-${baseColor}`
  } else {
    return `bg-transparent text-${baseColor} border-${baseColor} hover:shadow-md shadow-${shadowColor}`
  }

});
</script>

<template>
  <button
    :type="type"
    class="py-2 cursor-pointer text-base border flex justify-center items-center focus:outline-none"
    :class="[sizeStyle, roundedStyle, filledStyle]"
  >
    <slot />
  </button>
</template>
