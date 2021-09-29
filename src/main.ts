import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import { useAppRoutes } from './hooks/use-app-routes';

import App from './App.vue';

import './index.css';

const { routes } = useAppRoutes();

const router = createRouter({ history: createWebHistory(), routes });
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount('#app');
