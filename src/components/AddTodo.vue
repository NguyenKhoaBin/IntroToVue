<template>
  <div class="flex gap-3">
    <input
      type="text"
      v-model="newTodo"
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

<script>
import { defineComponent } from "vue";
import { useTodoStore } from "../stores/todoStore";

export default defineComponent({
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== "") {
        useTodoStore().addTodo({ text: this.newTodo, completed: false });
        this.newTodo = "";
      }
    },
  },
});
</script>
