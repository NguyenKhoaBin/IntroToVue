<script setup lang="ts">
import { defineProps } from "vue";

const { checked = false, checkboxClass } = defineProps<{
  checked?: boolean;
  checkboxClass?: string;
}>();
</script>

<template>
  <n-checkbox
    :checked="checked"
    :class="checkboxClass"
    v-bind="$attrs"
    @update:checked="$emit('update:checked', $event)"
  >
    <slot />
  </n-checkbox>
</template>
