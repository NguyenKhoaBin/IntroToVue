<template>
  <div :class="groupClass">
    <label v-if="label" :for="id">{{ label }}</label>
    <div :id="id" role="radiogroup">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
  groupClass: {
    type: String,
    default: "",
  },
});
</script>
