<template>
  <div class="text-center">
    <p class="text-lg">Register for the event here</p>
    <button
      class="border px-1 rounded-sm bg-[#E5E5E5] border-[#000] hover:bg-opacity-75 transition-all select-none"
      @click="register"
    >
      Register Me
    </button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  register: {
    type: Function,
  },
});
</script>
