<script setup>
import { ref } from 'vue';
import { useProfileStore } from '@/stores/userProfile.js';
import useAlert from '@/composables/useAlert.js';
import useNavigation  from '@/composables/useNavigation.js';
import { setCookie } from '@/utils/cookie.js';
import apiLogin from '@/apis/user/login.js';
import FormInput from '@/components/inputs/FormInput.vue';
import Button from '@/components/buttons/BaseButton.vue';

const useProfile = useProfileStore();
const { goToRoute } = useNavigation ();

const formRef = ref(null);

const submitLogin = async (value) => {
  try {
    const employeeLogin = { role: 'employee', ...value };

    const res = await apiLogin(employeeLogin);

    useAlert().showToast(res.message);
    setCookie('token', res.payload.token);
    useProfile.setProfile(res.payload);
    formRef.value.resetForm();

    goToRoute('hasLoginView');
  } catch (error) {
    useAlert().error('登入失敗', error.message);
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
      ref="formRef"
      v-slot="{ meta }"
      class="w-full flex flex-col"
      @submit="submitLogin"
    >
      <FormInput
        id="employeeEmail"
        name="account"
        label="帳號"
        type="email"
        rules="required|email"
        placeholder="請輸入電子信箱"
        class="min-h-[90px]"
      />
      <FormInput
        id="employeePassword"
        name="password"
        label="密碼"
        type="password"
        rules="required|min:6|max:10"
        placeholder="請輸入密碼"
        class="min-h-[90px]"
      />
      <Button
        role="employee"
        size="lg"
        :disabled="!meta.valid"
      >
        登入系統
      </Button>
    </VForm>
  </div>
</template>
