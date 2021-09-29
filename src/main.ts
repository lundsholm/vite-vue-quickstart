import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import App from './App.vue';

import './index.css';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];

const router = createRouter({ history: createWebHistory(), routes });
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount('#app');
