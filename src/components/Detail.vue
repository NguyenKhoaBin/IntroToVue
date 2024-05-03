<script setup lang="ts">
import { defineProps } from "vue";

interface Event {
  time: string;
  location: string;
  description: string;
}

interface Props {
  isDetailPage: boolean;
  selectedEvent: Event;
}

const props = defineProps<Props>();
</script>

<template>
  <div v-if="props.isDetailPage" class="py-5">
    <n-text class="text-center text-[#423e3e] text-md block">
      {{ props.selectedEvent.time }} @ {{ props.selectedEvent.location }}
    </n-text>

    <n-text class="text-center text-md text-[#423e3e] block">
      {{ props.selectedEvent.description }}
    </n-text>
  </div>
</template>
