<template>
  <div>
    <label v-if="label" :class="[BaseLabelClass]" :for="id">{{ label }}</label>
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="[BaseInputClass]"
      :id="id"
      v-bind="$attrs"
    ></textarea>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  label: {
    type: [String, Boolean],
    default: false,
  },
  modelValue: {
    type: String,
    default: "",
  },
  id: String,
  BaseInputClass: String,
  BaseLabelClass: String,
});
</script>
