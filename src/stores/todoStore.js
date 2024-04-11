import { defineStore } from "pinia";

export const useTodoStore = defineStore({
  id: "todo",
  state: () => ({
    todos: [],
  }),
  actions: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    completeTodo(index) {
      this.todos[index].completed = !this.todos[index].completed;
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
  },
});
