import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    isAuthenticated: false,
    user: {
      email: "bin@gmail.com",
      password: "12345678",
    },
  }),
  actions: {
    login(user) {
      this.isAuthenticated = true;
      this.user = user;
    },
    logout() {
      this.isAuthenticated = false;
      this.user = null;
    },
  },
});
