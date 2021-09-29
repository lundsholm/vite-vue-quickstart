import { onMounted } from 'vue';

export function useOnMountedLogger(msg: string) {
  onMounted(() => {
    console.log(msg);
  });
}
