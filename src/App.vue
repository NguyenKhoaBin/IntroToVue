<script setup>
import { RouterLink, useRoute } from "vue-router";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/events", label: "Events" },
  { path: "/reviews", label: "Reviews" },
  { path: "/about", label: "About" },
  { path: "/todo", label: "Todo List" },
  { path: "/event/add", label: "Add Event" },
  { path: "/signup", label: "SignUp" },
  { path: "/draggable", label: "Draggable" },
];

const route = useRoute();
</script>

<template>
  <div>
    <nav
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
