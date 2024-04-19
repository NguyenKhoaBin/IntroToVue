<template>
  <div
    v-for="(todo, index) in todos"
    :key="index"
    class="flex items-center w-full gap-2"
  >
    <span
      class="flex-1 w-full text-lg text-[#2C3E50] font-[500]"
      :style="{ 'text-decoration': todo.completed ? 'line-through' : 'none' }"
    >
      {{ todo.text }}
    </span>
    <i
      @click="completeTodo(index)"
      class="cursor-pointer pi pi-check hover:scale-105 text-[20px]"
      >V</i
    >
    <i
      @click="deleteTodo(index)"
      class="cursor-pointer pi pi-times hover:scale-105 text-[20px] text-[#F92F60]"
      >X</i
    >
  </div>
</template>

<script setup>
import { useTodoStore } from "@/stores/todoStore";

const completeTodo = (index) => {
  useTodoStore().completeTodo(index);
};

const deleteTodo = (index) => {
  useTodoStore().deleteTodo(index);
};

const todos = useTodoStore().todos;
</script>
