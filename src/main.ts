import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import { createPinia } from 'pinia';

import App from './App.vue';

import 'virtual:windi.css';
import './index.css';

const routes = setupLayouts(generatedRoutes);

const router = createRouter({ history: createWebHistory(), routes });
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount('#app');
