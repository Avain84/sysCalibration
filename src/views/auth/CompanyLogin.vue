<script setup>
import FormInput from '@/components/FormInput.vue';
import Button from '@/components/BaseButton.vue';
import LineDivider from '@/components/LineDivider.vue';
import apiLogin from '@/apis/user/login.js';
import useAlert from '@/composables/useAlert'

const submitLogin = async (value) => {
  try {
    const companyLogin = { role: 'company', ...value };
    
    const res = await apiLogin(companyLogin);
    // console.log(res);
    useAlert().showToast(res.message);
  } catch (error) {
    useAlert().error('登入失敗', error.message);
  }
};
</script>

<template>
  <div class="px-3 w-full sm:w-2/3 md:w-1/2 lg:w-2/3 mx-auto flex flex-col gap-8 justify-center items-center">
    <header>
      <h2 class="text-h2B text-center mb-6">校驗廠商</h2>
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
        id="companyEmail"
        rules="required|email"
        placeholder="請輸入電子信箱"
      />
      <FormInput
        name="password"
        label="密碼"
        type="password"
        id="companyPassword"
        rules="required|min:6|max:10"
        placeholder="請輸入密碼"
      />
      <Button role="company" size="lg" :disabled="!meta.valid">登入系統</Button>
    </VForm>
    <LineDivider>OR</LineDivider>
  </div>
</template>
