<script setup lang="ts">
import draggable from "vuedraggable";
import { ref, computed, Ref } from "vue";
import BaseInput from "../components/customInput/BaseInput.vue";
import BaseInputArea from "../components/customInput/BaseInputArea.vue";

let idGlobal = 8;

interface Task {
  name: string;
  id: number;
  content: string;
}

interface Column {
  name: string;
  id: number;
  items: Task[];
  newTask: string;
}

const columns = ref<Column[]>([
  {
    name: "todo",
    id: 1,
    items: [
      { name: "Task1", id: 1, content: "" },
      { name: "Task2", id: 2, content: "" },
      { name: "Task2", id: 3, content: "" },
    ],
    newTask: "",
  },
  {
    name: "in-progress",
    id: 2,
    items: [{ name: "first task", id: 5, content: "" }],
    newTask: "",
  },
  {
    name: "done",
    id: 2,
    items: [{ name: "second task", id: 5, content: "" }],
    newTask: "",
  },
]);

const controlOnStart = ref(true);
const showInput = ref(false);
const showOverlay = ref(false);
const selectedTask = ref<Task>({ name: "", id: 0, content: "" });
const inputValue = ref("");
const newColumnName = ref("");

const pullFunction = (): string | boolean => {
  return controlOnStart.value ? "clone" : true;
};

const start = ({ originalEvent }: { originalEvent: MouseEvent }): void => {
  controlOnStart.value = originalEvent.ctrlKey;
};

const addNewTask = (column: Column): void => {
  if (column.newTask.trim() !== "") {
    column.items.push({
      name: column.newTask,
      id: Math.max(...column.items.map((task) => task.id)) + 1,
      content: "",
    });
    column.newTask = "";
  }
};

const showInputArea = (task: Task): void => {
  selectedTask.value = task;
  showInput.value = true;
  showOverlay.value = true;
};

const addContentToTask = (): void => {
  selectedTask.value.content = inputValue.value;
  inputValue.value = "";
  hideInputArea();
};

const hideInputArea = (): void => {
  showInput.value = false;
  showOverlay.value = false;
};

const newColumnNameInputRef: Ref<HTMLInputElement | null> = ref(null);

const addNewColumn = (): void => {
  if (newColumnName.value.trim() !== "") {
    const newColumn: Column = {
      name: newColumnName.value,
      id: ++idGlobal,
      items: [],
      newTask: "",
    };
    columns.value.push(newColumn);
    newColumnName.value = "";
    newColumnNameInputRef.value?.focus();
  }
};
</script>

<template>
  <div
    class="bg-[#38A89D] h-full w-full min-h-screen py-10 select-none relative flex gap-2"
  >
    <div class="w-full">
      <div class="flex gap-2">
        <div
          v-for="column in columns"
          :key="column.id"
          class="flex flex-col p-3 h-fit max-w-[350px] w-full rounded-md bg-[#DAE1E7] mx-2"
        >
          <n-h3 class="text-lg font-[500]">
            {{ column.name }}
          </n-h3>
          <draggable
            :list="column.items"
            :group="{ name: 'columns', pull: pullFunction }"
            item-key="id"
            @start="start"
          >
            <template #item="{ element }">
              <div
                class="p-3 m-1 text-center bg-white rounded-md cursor-pointer list-group-item"
                @click="showInputArea(element)"
              >
                <n-text class="text-lg font-[500] block">
                  {{ element.name }}
                </n-text>
                <n-text class="block">
                  {{ element.content }}
                </n-text>
              </div>
            </template>
          </draggable>
          <BaseInput
            v-model="column.newTask"
            type="text"
            :bordered="false"
            BaseInputClass="h-[48px] !w-[350px] px-3 text-lg mx-1 rounded-md bg-[#DAE1E7] select-none"
            placeholder="+ Enter New Task"
            @keyup.enter="addNewTask(column)"
          />
        </div>
      </div>

      <!-- Overlay -->
      <div v-if="showOverlay" class="overlay" @click="addContentToTask" />

      <!-- Task Input Area -->
      <div v-if="showInput" class="z-50 task-input">
        <div
          class="w-[700px] h-fit rounded-md bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 text-lg"
        >
          <n-h1 class="font-[500] text-xl my-5">
            {{ selectedTask.name }}
          </n-h1>
          <BaseInputArea
            id="review"
            v-model="inputValue"
            name="review"
            rows="8"
            cols="50"
            BaseInputClass="w-full p-2"
          />
        </div>
      </div>
    </div>

    <!-- Add new column -->

    <div
      class="flex flex-col p-3 h-fit max-w-[350px] w-full rounded-md bg-[#DAE1E7] mx-2"
    >
      <BaseInput
        ref="newColumnNameInput"
        :bordered="false"
        v-model="newColumnName"
        type="text"
        BaseInputClass="h-[48px] w-[320px] px-3 text-lg mx-1 rounded-md bg-[#FFF] select-none"
        placeholder="New Column Name"
        @keyup.enter="addNewColumn"
      />
    </div>
  </div>
</template>

<style>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
}

.task-input {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
}
</style>
