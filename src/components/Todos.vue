<template>
  <div
    v-for="(todo, index) in todos"
    :key="index"
    class="flex items-center w-full gap-2"
  >
    <span
      class="flex-1 w-full text-lg text-[#2C3E50] font-[500]"
      :style="{
        'text-decoration': todo.completed ? 'line-through' : 'none',
      }"
    >
      {{ todo.text }}
    </span>
    <i
      @click="completeTodo(index)"
      class="cursor-pointer pi pi-check hover:scale-105 text-[20px]"
    ></i>
    <i
      @click="deleteTodo(index)"
      class="cursor-pointer pi pi-times hover:scale-105 text-[20px] text-[#F92F60]"
    ></i>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useTodoStore } from "../stores/todoStore";

export default defineComponent({
  methods: {
    completeTodo(index) {
      useTodoStore().completeTodo(index);
    },
    deleteTodo(index) {
      useTodoStore().deleteTodo(index);
    },
  },
  computed: {
    todos() {
      return useTodoStore().todos;
    },
  },
});
</script>
