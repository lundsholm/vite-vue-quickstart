<script setup lang="ts">
import Demo from '../components/Demo.vue';
</script>

<template>
  <h1 class="text-xl">This is the Home page</h1>
  <div class="mt-2 grid grid-cols-2 gap-2">
    <Demo my-prop="Login" />
  </div>
</template>

<style lang="scss" scoped></style>
