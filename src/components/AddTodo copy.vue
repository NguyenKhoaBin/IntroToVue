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

<script>
import { defineComponent } from "vue";
import { useTodoStore } from "@/stores/todoStore";
import BaseInput from "@/components/customInput/BaseInput.vue";

export default defineComponent({
  components: {
    BaseInput,
  },
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
