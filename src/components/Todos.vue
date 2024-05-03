<script setup lang="ts">
import { useTodoStore } from "../stores/todoStore";

const completeTodo = (index: number) => {
  useTodoStore().completeTodo(index);
};

const deleteTodo = (index: number) => {
  useTodoStore().deleteTodo(index);
};

const todos = useTodoStore().todos;
</script>

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
      class="cursor-pointer pi pi-check hover:scale-105 text-[20px]"
      @click="completeTodo(index)"
    />
    <i
      class="cursor-pointer pi pi-times hover:scale-105 text-[20px] text-[#F92F60]"
      @click="deleteTodo(index)"
    />
  </div>
</template>
