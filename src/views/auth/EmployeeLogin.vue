<script setup>
import FormInput from '@/components/FormInput.vue';
import Button from '@/components/BaseButton.vue';
import LineDivider from '@/components/LineDivider.vue';

const submitEmployeeLogin = (value) => {
  console.log(value);
};
</script>

<template>
  <div class="px-3 w-full sm:w-1/2 mx-auto flex flex-col gap-8 justify-center items-center">
    <header>
      <h2 class="text-h2B text-center mb-6">廠內職員</h2>
      <h3 class="text-h3B text-center">專屬系統登入口</h3>
    </header>
    <VForm
      v-slot="{ meta }"
      @submit="submitEmployeeLogin"
      class="w-full flex flex-col"
    >
      <FormInput
        name="employeeEmail"
        label="帳號"
        type="email"
        id="employeeEmail"
        rules="required|email"
        placeholder="請輸入電子信箱"
      />
      <FormInput
        name="employeePassword"
        label="密碼"
        type="password"
        id="employeePassword"
        rules="required|min:6|max:10"
        placeholder="請輸入密碼"
      />
      <Button role="employee" size="lg" :disabled="!meta.valid">登入系統</Button>
    </VForm>
    <LineDivider>OR</LineDivider>
  </div>
</template>
