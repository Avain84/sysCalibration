import { useRouter } from 'vue-router';

export default function useNavigation() {
  const router = useRouter();

  const goToRoute = (name, params = {}, query = {}) => {
    if (router.currentRoute.value.name === name) {
      return;
    }

    router.push({ name, params, query });
  };

  return { goToRoute };
}
