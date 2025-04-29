<script setup>
import IconButton from '@/components/buttons/IconButton.vue';

const callback = (response) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  console.log('Handle the response', response);
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
