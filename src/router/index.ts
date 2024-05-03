import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ReviewsView from "@/views/ReviewsView.vue";
import EventsView from "@/views/EventsView.vue";
import EventView from "@/views/EventView.vue";
import TodoListView from "@/views/TodoListView.vue";
import AddEventView from "@/views/AddEventView.vue";
import AuthView from "@/views/AuthView.vue";
import Draggable from "@/views/DraggableView.vue";
import ProfileView from "@/views/ProfileView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

import { useAuthStore } from "@/stores/authStore.ts";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/reviews", component: ReviewsView },
  { path: "/events", component: EventsView },
  { path: "/event/:id", component: EventView },
  { path: "/event/:id/register", component: EventView },
  { path: "/event/:id/edit", component: EventView },
  { path: "/event/add", component: AddEventView },
  { path: "/todo", component: TodoListView },
  { path: "/draggable", component: Draggable },
  { path: "/signin", component: AuthView },
  { path: "/forgot", component: AuthView },
  { path: "/profile", component: ProfileView },
  { path: "/404", component: NotFoundView },
  {
    path: "/:pathMatch(.*)",
    redirect: (to) => {
      return {
        path: "/404",
        query: {
          redirectFrom: to.fullPath,
        },
      };
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (!authStore.isAuthenticated) {
    if (to.path === "/forgot" || to.path === "/signin") {
      next();
    } else {
      next("/signin");
    }
  } else {
    next();
  }
});

export default router;
