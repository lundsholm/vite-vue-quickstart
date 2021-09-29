<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { onMounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useAppRoutes } from './hooks/use-app-routes';
const route = useRoute();
const { navRoutes } = useAppRoutes();
onMounted(() => {
  console.log('App is mounted');
});
</script>

<template>
  <header>
    <nav class="flex bg-gray-700 text-gray-400 px-4">
      <ul class="flex">
        <li
          :class="`nav-item flex justify-center px-4 py-2 ${route.path === navRoute.path ? 'nav-item--active' : ''}`"
          v-for="navRoute in navRoutes"
        >
          <RouterLink class="hover:text-white" :to="navRoute.path">{{ navRoute.label }}</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <main class="container mx-auto my-4">
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.router-link-active {
  color: white;
}

.nav-item {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0.4rem;
    width: 80%;
    height: 0.1rem;
    transform: scaleX(0);
    transition: transform 0.5s;
    background-color: white;
  }

  &--active::before {
    transform: scaleX(1);
  }
}
</style>
