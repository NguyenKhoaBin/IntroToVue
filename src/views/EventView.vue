<template>
  <div class="relative">
    <span
      v-if="isRegistered"
      class="absolute block w-full text-center bg-yellow-300 -top-5"
    >
      You are successfully registered for {{ selectedEvent.title }}
    </span>
    <div v-if="selectedEvent" class="py-5 my-3">
      <div
        class="items-center w-full space-y-2 text-xl transition-all select-none"
      >
        <h1 class="text-3xl font-bold text-center">
          {{ selectedEvent.title }}
        </h1>
        <div class="text-center">
          <RouterLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="mx-2"
            :class="{ 'text-green-500 underline': route.path === link.to }"
          >
            {{ link.label }}
          </RouterLink>
        </div>
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

<script setup>
import { computed, ref } from "vue";
import events from "@/data/events";
import { RouterLink, useRoute, useRouter } from "vue-router";
import Detail from "@/components/Detail.vue";
import Register from "@/components/Register.vue";
import Edit from "@/components/Edit.vue";

const route = useRoute();
const router = useRouter();

const selectedEvent = computed(() => {
  const eventId = route.params.id;
  return events.find((event) => event.id === eventId);
});

const links = [
  { to: `/event/${selectedEvent.value.id}`, label: "Detail" },
  { to: `/event/${selectedEvent.value.id}/register`, label: "Register" },
  { to: `/event/${selectedEvent.value.id}/edit`, label: "Edit" },
];

const isDetailPage = computed(() => {
  return route.path === `/event/${selectedEvent.value.id}`;
});

const isRegisterPage = computed(() => {
  return route.path === `/event/${selectedEvent.value.id}/register`;
});

const isEditPage = computed(() => {
  return route.path === `/event/${selectedEvent.value.id}/edit`;
});

const isRegistered = ref(false);

const register = () => {
  isRegistered.value = true;
  setTimeout(() => {
    isRegistered.value = false;
  }, 2000);
  const eventId = selectedEvent.value.id;
  router.push(`/event/${eventId}`);
};
</script>
