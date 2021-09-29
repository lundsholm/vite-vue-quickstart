import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import { Component } from 'vue-demi';

interface NavRoute {
  label: string;
  path: string;
}

interface FullRoute extends NavRoute {
  component: Component;
  showInNavbar: boolean;
}

export function useAppRoutes() {
  const fullRoutes: FullRoute[] = [
    { label: 'Home', path: '/', showInNavbar: true, component: Home },
    { label: 'About', path: '/about', showInNavbar: true, component: About },
  ];

  const navRoutes = fullRoutes
    .filter((route) => route.showInNavbar)
    .map((route): NavRoute => {
      return {
        label: route.label,
        path: route.path,
      };
    });

  const routes = fullRoutes.map((route) => {
    return {
      path: route.path,
      component: route.component,
    };
  });

  return { navRoutes, routes };
}
