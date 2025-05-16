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
const togglePassword = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};
</script>

<template>
  <div class="mb-2 relative">
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
    <button
      v-if="type === 'password'"
      type="button"
      class="w-6 aspect-square absolute right-2.5 top-9 text-gray-400 hover:text-gray-700"
      @click="togglePassword"
    >
      <img
        v-if="isPasswordVisible"
        src="/src/assets/icons/eye-close.svg"
        alt="password hidden"
      />
      <img
        v-else
        src="/src/assets/icons/eye-open.svg"
        alt="password show"
      />
    </button>
    <VErrorMessage
      v-slot="{ message }"
      :name="name"
      as="p"
      class="mt-1 pl-3 text-sm text-error-50"
    >
      {{ label + message }}
    </VErrorMessage>
  </div>
</template>
