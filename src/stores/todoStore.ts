import { defineStore } from "pinia";
import { Todo ,TodoState} from "../types/type"; 


export const useTodoStore = defineStore({
  id: "todo",
  state: (): TodoState => ({
    todos: [],
  }),
  actions: {
    addTodo( todo: Todo) {
      this.todos.push(todo);
    },
    completeTodo( index: number) {
      this.todos[index].completed = !this.todos[index].completed;
    },
    deleteTodo( index: number) {
      this.todos.splice(index, 1);
    },
  },
});
