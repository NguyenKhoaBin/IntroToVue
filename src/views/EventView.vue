<script setup lang="ts">
import events from "../data/events";
import { NSpace } from "naive-ui";
import { useRoute, useRouter } from "vue-router";
import { computed, ref } from "vue";
import { Event } from "../types/type";

const route = useRoute();
const router = useRouter();

const selectedEvent = computed<Event | undefined>(() => {
  const eventId = route.params.id;
  return events.find((event) => event.id === eventId);
});

const links = computed(() => {
  const event = selectedEvent.value;
  if (event) {
    return [
      { to: `/event/${event.id}`, label: "Detail" },
      { to: `/event/${event.id}/register`, label: "Register" },
      { to: `/event/${event.id}/edit`, label: "Edit" },
    ];
  } else {
    return [];
  }
});

const isDetailPage = computed(() => {
  const event = selectedEvent.value;
  return event ? route.path === `/event/${event.id}` : false;
});

const isRegisterPage = computed(() => {
  const event = selectedEvent.value;
  return event ? route.path === `/event/${event.id}/register` : false;
});

const isEditPage = computed(() => {
  const event = selectedEvent.value;
  return event ? route.path === `/event/${event.id}/edit` : false;
});

const isRegistered = ref<boolean>(false);

const register = () => {
  const event = selectedEvent.value;
  if (event) {
    isRegistered.value = true;
    setTimeout(() => {
      isRegistered.value = false;
    }, 2000);
    router.push(`/event/${event.id}`);
  }
};
</script>

<template>
  <div class="relative">
    <n-text
      v-if="isRegistered"
      class="absolute block w-full text-center bg-yellow-300 top-[0px]"
    >
      You are successfully registered for {{ selectedEvent?.title }}
    </n-text>
    <div v-if="selectedEvent" class="py-5 my-3">
      <div
        class="items-center w-full space-y-2 text-xl transition-all select-none"
      >
        <n-h1 class="text-3xl font-bold text-center">
          {{ selectedEvent.title }}
        </n-h1>
        <n-space class="text-center" align="center" justify="center">
          <RouterLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="mx-2"
            :class="{ 'text-green-500 underline': route.path === link.to }"
          >
            {{ link.label }}
          </RouterLink>
        </n-space>
        <Detail
          v-if="isDetailPage"
          :is-detail-page="isDetailPage"
          :selected-event="selectedEvent"
        />
      </div>
    </div>
    <Register v-if="isRegisterPage" :register="register" />
    <Edit v-if="isEditPage" />
  </div>
</template>
