<script setup>
import { computed } from 'vue';

const props = defineProps({
  type: { type: String, default: 'submit' }, // 按鈕類型（submit、button）
  size: { type: String, required: true }, // 按鈕大小（sm/md/lg/full）
  role: { type: String, default: 'common' }, // 按鈕角色（company/employee/default）
  rounded: { type: String, default: 'sm' }, // 圓角大小（sm/md/lg/full）
  filled: { type: Boolean, default: true }, // 按鈕樣式類型（實底白字/白底色字）
});

const sizeStyle = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-4 py-2 gap-1';
    case 'md':
      return 'px-8 py-2 gap-2';
    case 'lg':
      return 'px-16 py-3 gap-3';
    default:
      return 'py-2 w-full gap-3';
  }
});
const colorStyle = computed(() => {
  const colorMap = {
    employee: 'primary',
    company: 'tertiary',
    common: 'neutral',
  };

  if (props.filled) {
    return `bg-${colorMap[props.role]}-30 text-white border-${colorMap[props.role]}-30 hover:bg-white hover:text-${colorMap[props.role]}-30`;
  } else {
    return `bg-white text-${colorMap[props.role]}-30 border-${colorMap[props.role]}-30 hover:bg-${colorMap[props.role]}-30 hover:text-white`;
  }
});

const roundedStyle = computed(() => {
  switch (props.rounded) {
    case 'sm':
      return 'rounded-sm';
    case 'md':
      return 'rounded-md';
    case 'lg':
      return 'rounded-lg';
    case 'full':
      return 'rounded-full';
    default:
      return 'rounded-2xl';
  }
});
</script>

<template>
  <button
    :type="type"
    class="cursor-pointer text-base border flex justify-center items-center focus:outline-none"
    :class="[sizeStyle, roundedStyle, colorStyle]"
  >
    <slot />
  </button>
</template>