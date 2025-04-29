<script setup>
import IconButton from '@/components/buttons/IconButton.vue';
import apiLogin from '@/apis/user/login.js';
import useAlert from '@/composables/useAlert.js';
import { setCookie } from '@/utils/cookie.js';

const submitLogin = async (value) => {
  try {
    const companyLogin = { role: 'company', ...value };

    const res = await apiLogin(companyLogin);
    useAlert().showToast(res.message);
    setCookie('token', res.payload.token);
  } catch (error) {
    useAlert().error('登入失敗', error.message);
  }
};

const callback = (response) => {
  const c02Data = {
    account: 'company02@test.com',
    password: 'c02c02',
  };

  if (response.code.startsWith('4/0')) {
    useAlert().confirm(
      '成功取得 Google code',
      () => submitLogin(c02Data),
      '未搭配後端驗證，將使用［廠商二］身分登入',
    );
  } else {
    useAlert().error('授權失敗', '無法取得 Google 帳號資訊');
  }
};
</script>

<template>
  <GoogleLogin :callback="callback">
    <IconButton size="full">
      <span>Google 登入</span>
      <img
        src="@/assets/icons/google.svg"
        alt="Google icon"
      />
    </IconButton>
  </GoogleLogin>
</template>
