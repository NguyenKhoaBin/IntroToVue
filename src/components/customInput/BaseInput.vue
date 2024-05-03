<script setup lang="ts">
import { NInput } from "naive-ui";

const {
  modelValue = "",
  bordered = true,
  BaseInputClass = "",
  type = "text",
} = defineProps<{
  modelValue?: string;
  bordered: boolean;
  BaseInputClass?: string;
  type?: "text" | "textarea" | "password" | undefined;
}>();
</script>

<template>
  <n-input
    :value="modelValue"
    :class="[BaseInputClass]"
    :bordered="bordered"
    v-bind="$attrs"
    :type="type"
    @update:value="$emit('update:modelValue', $event)"
  />
</template>
