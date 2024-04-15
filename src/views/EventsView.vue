<template>
  <div class="flex flex-col items-center gap-10 p-10">
    <h1 class="text-4xl font-[600] select-none">Events For Good</h1>
    <RouterLink
      v-for="event in displayedEvents"
      :key="event.id"
      :to="`/event/${event.id}`"
    >
      <div
        class="items-center p-5 space-y-2 text-xl transition-all border-2 cursor-pointer hover:scale-110 min-w-[290px] select-none"
      >
        <p class="text-center font-[500]">
          {{ event.title }}
        </p>
        <p class="text-center text-[#423e3e] text-md">@{{ event.time }}</p>
      </div>
    </RouterLink>
    <div class="relative w-[290px] transition-all text-lg select-none">
      <span
        v-if="currentPage > 0"
        class="absolute left-0 cursor-pointer hover:scale-105 hover:underline"
        @click="previousPage"
        >Previous</span
      >
      <span
        v-if="currentPage < totalPages - 1"
        class="absolute right-0 cursor-pointer hover:scale-105 hover:underline"
        @click="nextPage"
        >Next</span
      >
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import events from "@/data/events";

const currentPage = ref(0);
const pageSize = 2;

const displayedEvents = computed(() => {
  const startIndex = currentPage.value * pageSize;
  return events.slice(startIndex, startIndex + pageSize);
});

const totalPages = computed(() => Math.ceil(events.length / pageSize));

const nextPage = () => {
  if (currentPage.value < totalPages.value - 1) {
    currentPage.value++;
  }
};

const previousPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--;
  }
};
</script>
