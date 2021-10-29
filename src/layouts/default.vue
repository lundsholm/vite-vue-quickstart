<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import { useAppRoutes } from '@/hooks/use-app-routes';
const route = useRoute();
const { navRoutes } = useAppRoutes();
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
    <router-view> </router-view>
  </main>
</template>

<style lang="scss" scoped></style>
