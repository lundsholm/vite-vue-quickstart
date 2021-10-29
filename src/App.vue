<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { onMounted } from 'vue';

onMounted(() => {
  console.log('App is mounted');
});
</script>

<template>
  <router-view></router-view>
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
