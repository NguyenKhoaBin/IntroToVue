<template>
  <div class="flex flex-col gap-3">
    <BaseInput v-model="newTodo" type="text" />
    <button @click="addTodo" class="baseButton">Add</button>
  </div>
</template>

<script setup>
import { useTodoStore } from "@/stores/todoStore";
import BaseInput from "@/components/customInput/BaseInput.vue";
import { ref } from "vue";
const newTodo = ref("");
const addTodo = () => {
  if (newTodo.value.trim() !== "") {
    useTodoStore().addTodo({ text: newTodo.value, completed: false });
    newTodo.value = "";
  }
};
</script>
