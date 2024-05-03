<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  name: String,
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <n-radio-group
    :value="props.modelValue"
    :name="props.name"
    @update:value="emit('update:modelValue', $event)"
  >
    <slot />
  </n-radio-group>
</template>
