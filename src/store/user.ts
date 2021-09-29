import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      name: 'User',
      isAdmin: false,
      isLoggedIn: false,
    };
  },
  actions: {
    login() {
      this.isLoggedIn = true;
      this.isAdmin = true;
    },
    logout() {
      this.isLoggedIn = false;
      this.isAdmin = false;
    },
  },
});
