<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  register: Function;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="text-center">
    <n-text class="block my-2 text-lg"> Register for the event here </n-text>
    <n-button @click="props.register"> Register Me </n-button>
  </div>
</template>
