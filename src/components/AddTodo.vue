<template>
  <div class="flex gap-3">
    <BaseInput
      v-model="newTodo"
      type="text"
      class="min-w-[280px] w-full p-2 py-1 outline-none rounded-sm"
    />
    <button
      @click="addTodo"
      class="text-white bg-[#2F6089] text-lg font-[500] hover:bg-opacity-75 rounded-md px-3 py-1"
    >
      Add
    </button>
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
