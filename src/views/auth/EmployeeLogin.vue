<script setup>
import FormInput from '@/components/FormInput.vue';
import Button from '@/components/BaseButton.vue';
import LineDivider from '@/components/LineDivider.vue';
import apiLogin from '@/apis/user/login.js';

const submitLogin = async (value) => {
  try {
    const employeeLogin = { role: 'employee', ...value };
    
    const res = await apiLogin(employeeLogin);
    console.log(res.data.payload);
  } catch (error) {
    console.log(error.message);
  }
};
</script>

<template>
  <div
    class="px-3 w-full sm:w-2/3 md:w-1/2 lg:w-2/3 mx-auto flex flex-col gap-8 justify-center items-center"
  >
    <header>
      <h2 class="text-h2B text-center mb-6">廠內職員</h2>
      <h3 class="text-h3B text-center">專屬系統登入口</h3>
    </header>
    <VForm
      v-slot="{ meta }"
      @submit="submitLogin"
      class="w-full flex flex-col"
    >
      <FormInput
        name="account"
        label="帳號"
        type="email"
        id="employeeEmail"
        rules="required|email"
        placeholder="請輸入電子信箱"
      />
      <FormInput
        name="password"
        label="密碼"
        type="password"
        id="employeePassword"
        rules="required|min:6|max:10"
        placeholder="請輸入密碼"
      />
      <Button
        role="employee"
        size="lg"
        :disabled="!meta.valid"
        >登入系統</Button
      >
    </VForm>
  </div>
</template>
