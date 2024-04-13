<template>
  <div
    class="flex flex-col items-center py-10 text-[#7F7F7F] select-none text-lg"
  >
    <VForm :validation-schema="schema" @submit="onSubmit">
      <label for="email" class="block font-[500]">Email :</label>
      <VField
        name="email"
        type="email"
        class="h-[50px] w-[450px] border rounded-sm p-3"
        placeholder="Enter your email"
      />
      <ErrorMessage name="email" class="block text-orange-700" />
      <label for="Password" class="block font-[500] mt-3">Password :</label>
      <VField
        name="password"
        type="password"
        placeholder="Enter your password"
        class="h-[50px] w-[450px] border rounded-sm p-3"
      />
      <ErrorMessage name="password" class="block text-orange-700" />

      <button
        type="submit"
        class="h-[50px] w-[135px] rounded-md bg-gradient-to-r from-teal-400 to-green-400 text-white text-lg font-500 cursor-pointer hover:scale-105 transition-all my-5 block"
      >
        Submit
      </button>
    </VForm>
  </div>
</template>
<script setup>
import { Field as VField, Form as VForm, ErrorMessage } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

function onSubmit(values) {
  alert(JSON.stringify(values, null, 2));
}
</script>
