import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ReviewsView from "@/views/ReviewsView.vue";
import EventsView from "@/views/EventsView.vue";
import EventView from "@/views/EventView.vue";
import TodoListView from "@/views/TodoListView.vue";
import AddEventView from "@/views/AddEventView.vue";
import SignUpView from "@/views/SignUpView.vue";
import Draggable from "@/views/DraggableView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/about",
    component: AboutView,
  },
  {
    path: "/reviews",
    component: ReviewsView,
  },
  {
    path: "/events",
    component: EventsView,
  },
  {
    path: "/event/:id",
    component: EventView,
  },
  {
    path: "/event/:id/register",
    component: EventView,
  },
  {
    path: "/event/:id/edit",
    component: EventView,
  },
  {
    path: "/event/add",
    component: AddEventView,
  },
  {
    path: "/todo",
    component: TodoListView,
  },
  {
    path: "/signup",
    component: SignUpView,
  },
  {
    path: "/draggable",
    component: Draggable,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
