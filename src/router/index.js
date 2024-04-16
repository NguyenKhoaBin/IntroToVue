import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ReviewsView from "@/views/ReviewsView.vue";
import EventsView from "@/views/EventsView.vue";
import EventView from "@/views/EventView.vue";
import TodoListView from "@/views/TodoListView.vue";
import AddEventView from "@/views/AddEventView.vue";
import SignInView from "@/views/SignInView.vue";
import Draggable from "@/views/DraggableView.vue";
import { useAuthStore } from "@/stores/authStore";

const routes = [
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
  { path: "/signin", component: SignInView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.path !== "/signin" && !authStore.isAuthenticated) {
    next("/signin");
  } else {
    next();
  }
});

export default router;
