<template>
  <div class="bg-[#000]">
    <div
      class="w-full h-[900px] bg-[#f5f5f5] relative mx-auto overflow-hidden select-none"
    >
      <img
        src="@/assets/LogoSuga.png"
        alt="LogoSuga"
        class="w-[1081.45px] h-[915px] top-[-15px] left-[-387px] absolute"
      />
      <component :is="currentComponent" />
      <!-- <ChangePassword /> -->
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

import SigIn from "@/components/auth/SignIn.vue";
import Forgot from "@/components/auth/Forgot.vue";
import ChangePassword from "@/components/auth/ChangePassword.vue";

import { computed } from "vue";
const route = useRoute();

const currentComponent = computed(() => {
  return route.path === "/signin" ? SigIn : Forgot;
});
</script>
