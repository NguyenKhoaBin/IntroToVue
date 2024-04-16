<template>
  <div class="flex flex-col gap-3">
    <BaseInput v-model="newTodo" type="text" />
    <button @click="addTodo" class="baseButton">Add</button>
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
