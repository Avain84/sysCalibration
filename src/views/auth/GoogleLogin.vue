<script setup>
import { useProfileStore } from '@/stores/userProfile.js';
import useAlert from '@/composables/useAlert.js';
import useNavigation from '@/composables/useNavigation.js';
import apiLogin from '@/apis/user/login.js';
import { setCookie } from '@/utils/cookie.js';
import Button from '@/components/Button.vue';

const useProfile = useProfileStore();
const { goToRoute } = useNavigation();

const submitLogin = async (value) => {
  try {
    const companyLogin = { role: 'company', ...value };

    const res = await apiLogin(companyLogin);

    useAlert().showToast(res.message);
    setCookie('token', res.payload.token);
    useProfile.setProfile(res.payload);

    goToRoute('hasLoginView');
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
    <Button
      size="full"
      rounded="full"
      :filled="false"
      class="shadow-md"
    >
      <span>Google 登入</span>
      <img
        src="@/assets/icons/google.svg"
        alt="Google icon"
      />
    </Button>
  </GoogleLogin>
</template>
