<script setup lang="ts">
import { ref, computed } from "vue";
import events from "../data/events";
import { NSpace } from "naive-ui";
import { Event } from "../types/type";
const currentPage = ref<number>(0);
const pageSize: number = 2;

const displayedEvents = computed<Event[]>(() => {
  const startIndex = currentPage.value * pageSize;
  return events.slice(startIndex, startIndex + pageSize);
});

const totalPages = computed<number>(() => Math.ceil(events.length / pageSize));

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

<template>
  <n-flex
    justify="center"
    vertical
    align="center"
    class="gap-10 p-10 select-none"
  >
    <n-h1 class="text-4xl font-[600]"> Events For Good </n-h1>
    <RouterLink
      v-for="event in displayedEvents"
      :key="event.id"
      :to="`/event/${event.id}`"
    >
      <n-space
        align="center"
        vertical
        class="p-5 space-y-2 transition-all border-2 cursor-pointer hover:scale-110 min-w-[290px]"
      >
        <n-text class="text-center text-xl font-[500]" strong>
          {{ event.title }}
        </n-text>
        <n-text class="text-center text-[#423e3e] text-xl">
          @{{ event.time }}
        </n-text>
      </n-space>
    </RouterLink>
    <div class="relative w-[290px] transition-all text-lg">
      <n-text
        v-if="currentPage > 0"
        class="absolute left-0 cursor-pointer hover:scale-105 hover:underline"
        @click="previousPage"
      >
        Previous
      </n-text>
      <n-text
        v-if="currentPage < totalPages - 1"
        class="absolute right-0 cursor-pointer hover:scale-105 hover:underline"
        @click="nextPage"
      >
        Next
      </n-text>
    </div>
  </n-flex>
</template>
