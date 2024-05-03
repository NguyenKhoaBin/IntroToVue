import { defineStore } from "pinia";
import { AuthState } from "../types/type"; 


export const useAuthStore = defineStore({
  id: "auth",
  state: (): AuthState => ({
    isAuthenticated: false,
    user: {},
  }),
  actions: {
    login( user: object) {
      this.isAuthenticated = true;
      this.user = user;
    },
    logout() {
      this.isAuthenticated = false;
      this.user = {};
    },
  },
});
