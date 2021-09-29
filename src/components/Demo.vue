<script setup lang="ts">
import { ref, reactive, computed, watch, onMounted } from 'vue';
import { useUserStore } from '../store/user';
import BorderBox from './BorderBox.vue';
import UserBox from './UserBox.vue';
// props with defalt values
interface Props {
  myProp?: string;
}

const props = withDefaults(defineProps<Props>(), {
  myProp: 'hello',
});

// events that can be emitted
const emit = defineEmits<{
  (e: 'change', id: number): void;
  (e: 'update', value: string): void;
}>();

const userStore = useUserStore();

// variable that can be updated, reactive
const count = ref(0);
// object that can be updated, reactive
const state = reactive({ members: 10 });
// computed value
const doubleCount = computed(() => count.value * 2);

// watching a ref
watch(count, (newVal, oldVal) => {
  console.log(`count was updated.\nnewVal: ${newVal}\noldVal: ${oldVal}`);
});

// watching a nested prop
watch(
  () => state.members,
  (newVal, oldVal) => {
    console.log(`state.members was updated.\nnewVal: ${newVal}\noldVal: ${oldVal}`);
  }
);

function handleClick() {
  count.value++;
  emit('change', count.value);
}

onMounted(() => {
  console.log('Demo is mounted');
});
</script>

<template>
  <button
    class="px-4 py-2 rounded bg-blue-500 text-white font-medium shadow-md active:shadow-sm"
    type="button"
    @click="userStore.isLoggedIn ? userStore.logout() : userStore.login()"
  >
    {{ userStore.isLoggedIn ? 'Logout' : myProp }}
  </button>

  <UserBox />

  <button
    class="px-4 py-2 rounded bg-blue-500 text-white font-medium shadow-md active:shadow-sm"
    type="button"
    @click="handleClick()"
  >
    count is: {{ count }}
  </button>
  <BorderBox>
    <h2>Double count: {{ doubleCount }}</h2>
  </BorderBox>

  <button
    class="px-4 py-2 rounded bg-blue-500 text-white font-medium shadow-md active:shadow-sm"
    type="button"
    @click="() => state.members++"
  >
    Add members
  </button>
  <BorderBox>
    <h2>Members: {{ state.members }}</h2>
  </BorderBox>
</template>

<style lang="scss" scoped></style>
