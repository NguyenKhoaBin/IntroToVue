<template>
  <label :for="id" :class="radioLabel">
    <input
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      :checked="checked"
      @change="$emit('update:modelValue', value)"
    />
    <span class="radio-text"><slot></slot></span>
  </label>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    default: "",
  },
  checked: {
    type: Boolean,
    default: false,
  },
  radioLabel: {
    type: String,
    default: "",
  },
});
</script>
