<script setup>
import { ref, computed } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps({
  name: { type: String, required: true },
  label: { type: String, required: true },
  id: { type: String, required: true },
  type: { type: String, required: false, default: 'text' },
  placeholder: { type: String, required: false, default: ' ' },
  rules: { type: String, required: true },
  // errorMessage: { type: String, required: false, default: '請重新輸入' },
  readonly: { type: Boolean, default: false },
});

const { errorMessage, meta } = useField(props.name);
const hasError = computed(() => !!errorMessage.value && meta.touched);

const isPasswordVisible = ref(false);
// const togglePassword = () => {
//   isPasswordVisible.value = !isPasswordVisible.value;
// };
</script>

<template>
  <div class="mb-6">
    <label
      :for="id"
      class="block mb-2 text-h6 text-black"
    >
      {{ label }}
    </label>
    <VInput
      :id="id"
      :name="name"
      :type="type === 'password' && isPasswordVisible ? 'text' : type"
      :placeholder="placeholder"
      :rules="rules"
      :readonly="readonly"
      class="block w-full p-2.5 text-sm focus:outline-none"
      :class="[
        readonly
          ? 'border-b border-black rounded-none'
          : [
            'border border-black rounded-sm',
            hasError ? 'border-error-50 focus:border-error-50' : 'focus:border-primary-30',
          ],
      ]"
    />
    <VErrorMessage
      :name="name"
      class="mt-1 pl-3 text-sm text-error-50"
    >
      {{ errorMessage }}
    </VErrorMessage>
  </div>
</template>
