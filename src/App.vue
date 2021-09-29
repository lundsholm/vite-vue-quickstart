<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
onMounted(() => {
  console.log('App is mounted');
});
</script>

<template>
  <header>
    <nav class="flex bg-gray-700 text-gray-200">
      <ul class="flex">
        <li class="flex px-4 py-2">
          <RouterLink class="hover:text-white" to="/">Home</RouterLink>
        </li>
        <li class="flex px-4 py-2">
          <RouterLink class="hover:text-white" to="/about">About</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <main class="container mx-auto my-4">
    <router-view></router-view>
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.router-link-active {
  color: white;
}
</style>
