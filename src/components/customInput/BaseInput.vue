<template>
  <div>
    <label v-if="label" :class="[BaseLabelClass]" :for="id">{{ label }}</label>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="[BaseInputClass ? BaseInputClass + 'baseInput' : 'baseInput']"
      :id="id"
      v-bind="$attrs"
    />
  </div>
</template>

<script setup>
defineProps({
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
