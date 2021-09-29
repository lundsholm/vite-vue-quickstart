<script setup lang="ts">
import BorderBox from './BorderBox.vue';
import { useUserStore } from '../store/user';

const userStore = useUserStore();
</script>

<template>
  <BorderBox class="flex items-center">
    <i-mdi-account-box :class="`text-3xl ${userStore.isAdmin ? 'text-blue-500' : 'text-red-500'}`" />
    <p>{{ userStore.name }} is {{ userStore.isAdmin ? '' : 'not' }} an admin user</p>
  </BorderBox>
</template>

<style lang="scss" scoped></style>
