<template>
  <div class="h-screen w-full bg-[#597D9A] transition-all select-none">
    <div
      class="bg-[#F7F9FC] h-full w-[550px] p-10 mx-auto flex flex-col items-center gap-5"
    >
      <h1 class="text-3xl font-bold">To Do List</h1>
      <AddTodo />
      <Todos />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AddTodo from "../components/AddTodo.vue";
import Todos from "../components/Todos.vue";

export default defineComponent({
  components: {
    AddTodo,
    Todos,
  },
});
</script>
