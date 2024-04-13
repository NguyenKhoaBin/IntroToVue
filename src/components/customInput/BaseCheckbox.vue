<template>
  <label :for="id" :class="labelClass">
    <input
      type="checkbox"
      :id="id"
      :checked="checked"
      @change="$emit('update:modelValue', $event.target.checked ? 1 : 0)"
      :class="checkboxClass"
      v-bind="$attrs"
    />
    <span class="checkbox-text"><slot></slot></span>
  </label>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  checkboxClass: String,
  labelClass: String,
});
</script>
