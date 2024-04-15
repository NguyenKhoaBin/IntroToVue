<template>
  <div
    class="bg-[#38A89D] h-full w-full min-h-screen py-10 select-none relative flex gap-2"
  >
    <div>
      <div class="flex gap-2">
        <div
          class="flex flex-col p-3 h-fit max-w-[350px] w-full rounded-md bg-[#DAE1E7] mx-2"
          v-for="column in columns"
          :key="column.id"
        >
          <h3 class="text-lg font-[500]">{{ column.name }}</h3>
          <draggable
            :list="column.items"
            :group="{ name: 'columns', pull: pullFunction }"
            @start="start"
            item-key="id"
          >
            <template #item="{ element }">
              <div
                class="p-3 m-1 text-center bg-white rounded-md cursor-pointer list-group-item"
                @click="showInputArea(element)"
              >
                <p class="text-lg font-[500]">{{ element.name }}</p>
                <p>{{ element.content }}</p>
              </div>
            </template>
          </draggable>
          <BaseInput
            v-model="column.newTask"
            type="text"
            BaseInputClass="h-[48px] w-[320px] px-3 text-lg mx-1 rounded-md bg-[#DAE1E7] select-none"
            placeholder="+ Enter New Task"
            @keyup.enter="addNewTask(column)"
          />
        </div>
      </div>

      <!-- Overlay -->
      <div v-if="showOverlay" class="overlay" @click="addContentToTask"></div>

      <!-- Task Input Area -->
      <div v-if="showInput" class="z-50 task-input">
        <div
          class="w-[700px] h-fit rounded-md bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 text-lg"
        >
          <h1 class="font-[500] text-xl my-5">{{ selectedTask.name }}</h1>
          <BaseInputArea
            v-model="inputValue"
            id="review"
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
        v-model="newColumnName"
        type="text"
        BaseInputClass="h-[48px] w-[320px] px-3 text-lg mx-1 rounded-md bg-[#FFF] select-none"
        placeholder="New Column Name"
        @keyup.enter="addNewColumn"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import draggable from "vuedraggable";
import BaseInput from "@/components/customInput/BaseInput.vue";
import BaseInputArea from "@/components/customInput/BaseInputArea.vue";

let idGlobal = 8;

const columns = ref([
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
const selectedTask = ref({});
const inputValue = ref("");
const newColumnName = ref("");

const pullFunction = () => {
  return controlOnStart.value ? "clone" : true;
};

const start = ({ originalEvent }) => {
  controlOnStart.value = originalEvent.ctrlKey;
};

const addNewTask = (column) => {
  if (column.newTask.trim() !== "") {
    column.items.push({
      name: column.newTask,
      id: Math.max(...column.items.map((task) => task.id)) + 1,
      content: "",
    });
    column.newTask = "";
  }
};

const showInputArea = (task) => {
  selectedTask.value = task;
  showInput.value = true;
  showOverlay.value = true;
};

const addContentToTask = () => {
  selectedTask.value.content = inputValue.value;
  inputValue.value = "";
  hideInputArea();
};

const hideInputArea = () => {
  showInput.value = false;
  showOverlay.value = false;
};

const addNewColumn = () => {
  const newColumn = {
    name: newColumnName.value,
    id: idGlobal++,
    items: [],
    newTask: "",
  };
  columns.value.push(newColumn);
  newColumnName.value = "";
  $refs.newColumnNameInput.focus();
};
</script>

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
