<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  modelValue: string;
  options: any[]; // Chỉ định kiểu dữ liệu phù hợp với loại của mảng options của bạn
  baseClass: string;
}>();
</script>

<template>
  <n-select
    :value="props.modelValue"
    :options="props.options"
    :class="props.baseClass"
    size="large"
    @update:value="$emit('update:modelValue', $event)"
  >
    <div class="py-5" />
  </n-select>
</template>
