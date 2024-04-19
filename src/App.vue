<script setup>
import { RouterLink, useRoute } from "vue-router";
import { useAuthStore } from "@/stores/authStore";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/events", label: "Events" },
  { path: "/reviews", label: "Reviews" },
  { path: "/about", label: "About" },
  { path: "/todo", label: "Todo List" },
  { path: "/event/add", label: "Add Event" },
  { path: "/draggable", label: "Draggable" },
  { path: "/profile", label: "Profile" },
];

const route = useRoute();
const authStore = useAuthStore();
</script>

<template>
  <div class="min-w-full w-fit">
    <nav
      v-if="authStore.isAuthenticated"
      class="h-[65px] w-full bg-gradient-to-r from-teal-500 shadow-md to-green-500 flex items-center justify-center gap-5 text-lg text-white select-none"
    >
      <RouterLink
        v-for="link in navLinks"
        :key="link.path"
        :to="link.path"
        :class="{
          'text-black': route.path === link.path,
          'text-white': route.path !== link.path,
          'hover:underline transition-all': route.path !== link.path,
        }"
      >
        {{ link.label }}
      </RouterLink>
    </nav>
    <RouterView />
  </div>
</template>
