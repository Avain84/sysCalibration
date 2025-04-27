<script setup>
defineProps({
  name: { type: String, required: true },
  label: { type: String, required: true },
  id: { type: String, required: true },
  type: { type: String, required: false, default: 'text' },
  placeholder: { type: String, required: false, default: ' ' },
  rules: { type: String, required: true },
});

import { ref } from 'vue';
const isPasswordVisible = ref(false);
</script>

<template>
  <div class="mb-2 min-h-[90px]">
    <label
      :for="id"
      class="block mb-2 text-h6 text-black"
    >
      {{ label }}
    </label>
    <VField
      :id="id"
      :name="name"
      :type="type === 'password' && isPasswordVisible ? 'text' : type"
      :rules="rules"
      :placeholder="placeholder"
      class="block w-full p-2.5 text-sm focus:outline-none border border-black rounded-sm focus:border-primary-30"
    />
    <VErrorMessage
      :name="name"
      class="mt-1 pl-3 text-sm text-error-50"
    />
  </div>
</template>
