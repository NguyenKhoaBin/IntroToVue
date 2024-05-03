<script setup>
import { defineProps } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  BaseInputClass: String,
});
</script>

<template>
  <textarea
    :value="modelValue"
    :class="[BaseInputClass]"
    v-bind="$attrs"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
