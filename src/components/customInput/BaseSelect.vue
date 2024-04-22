<template>
  <div>
    <label v-if="label" :for="id" :class="labelClass">{{ label }}</label>
    <select
      :id="id"
      :class="[baseClass, selectClass]"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    >
      <slot></slot>
    </select>
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
  modelValue: {
    type: String,
    default: "",
  },
  baseClass: {
    type: String,
    default: "base-select",
  },
  selectClass: {
    type: String,
    default: "",
  },
  labelClass: {
    type: String,
    default: "",
  },
});
</script>
