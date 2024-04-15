<template>
  <div class="py-5">
    <div v-if="isDetailPage">
      <p class="text-center text-[#423e3e] text-md">
        {{ selectedEvent.time }} @ {{ selectedEvent.location }}
      </p>

      <p class="text-center text-md text-[#423e3e]">
        {{ selectedEvent.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  isDetailPage: Boolean,
  selectedEvent: Object,
});
</script>
