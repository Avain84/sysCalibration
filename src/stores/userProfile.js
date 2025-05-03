import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useProfileStore = defineStore('userProfile', () => {
  const userProfile = ref({});
  function setProfile(profile) {
    userProfile.value = profile;
  }

  return { userProfile, setProfile }
})
