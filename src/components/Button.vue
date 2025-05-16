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
  const sizeMap = {
    sm: 'px-4 py-2 gap-1',
    md: 'px-8 py-2 gap-2',
    lg: 'px-16 py-3 gap-3',
    full: 'py-2 w-full gap-3',
  };

  return sizeMap[props.size] || sizeMap.full;
});

const colorStyle = computed(() => {
  const themeColors = {
    employee: {
      bg: 'bg-primary-30',
      text: 'text-primary-30',
      border: 'border-primary-30',
      hoverBg: 'hover:bg-primary-30',
      hoverText: 'hover:text-primary-30',
    },
    company: {
      bg: 'bg-tertiary-30',
      text: 'text-tertiary-30',
      border: 'border-tertiary-30',
      hoverBg: 'hover:bg-tertiary-30',
      hoverText: 'hover:text-tertiary-30',
    },
    common: {
      bg: 'bg-neutral-30',
      text: 'text-neutral-30',
      border: 'border-neutral-30',
      hoverBg: 'hover:bg-neutral-30',
      hoverText: 'hover:text-neutral-30',
    },
  };

  const colors = themeColors[props.role] || themeColors.common;

  if (props.filled) {
    return `${colors.bg} text-white ${colors.border} hover:bg-white ${colors.hoverText}`;
  } else {
    return `bg-white ${colors.text} ${colors.border} ${colors.hoverBg} hover:text-white`;
  }
});

const roundedStyle = computed(() => {
  const roundedMap = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };

  return roundedMap[props.rounded] || roundedMap.full;
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
