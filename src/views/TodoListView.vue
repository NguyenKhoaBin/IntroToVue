<script setup></script>

<template>
  <div class="h-full w-full bg-[#597D9A] transition-all select-none">
    <div
      class="bg-[#F7F9FC] h-full w-[550px] p-10 mx-auto flex flex-col items-center gap-5"
    >
      <h1 class="text-3xl font-bold">To Do List</h1>
      <AddTodo />
      <Todos />
    </div>
  </div>
</template>
