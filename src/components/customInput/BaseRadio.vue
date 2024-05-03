<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  value: string;
  label: string;
}>();
</script>

<template>
  <n-radio :key="props.value" :value="props.value" :label="props.label" />
</template>
