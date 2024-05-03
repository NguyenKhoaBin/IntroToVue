<script setup lang="ts">
import { ref, computed } from "vue";
import { NText, NFlex } from "naive-ui";
import BaseInput from "../components/customInput/BaseInput.vue";
import BaseSelect from "../components/customInput/BaseSelect.vue";

interface Review {
  name: string;
  review: string;
  rating: string;
}

const reviews = ref<Review[]>([]);
const formData = ref<Review>({
  name: "",
  review: "",
  rating: "1",
});

const options = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
];

const isFormIncomplete = computed(() => {
  return (
    !formData.value.name || !formData.value.review || !formData.value.rating
  );
});

const handleSubmit = () => {
  if (isFormIncomplete.value) {
    alert("Review is incomplete. Please fill out every field.");
    return;
  }
  reviews.value.push({ ...formData.value });
  formData.value = {
    name: "",
    review: "",
    rating: "1",
  };
};
</script>

<template>
  <div class="flex flex-col items-center select-none">
    <div
      v-if="reviews.length > 0"
      class="w-[470px] py-[45px] px-4 bg-white border-2 my-5"
    >
      <n-text class="text-3xl font-[500] block mb-5"> Reviews: </n-text>
      <n-flex
        v-for="(review, index) in reviews"
        :key="index"
        vertical
        class="mt-3"
      >
        <n-text class="text-lg">
          {{ review.name }} gave this {{ review.rating }} stars
        </n-text>
        <n-text class="block text-lg"> " {{ review.review }} " </n-text>
      </n-flex>
    </div>

    <div class="w-[470px] py-[45px] px-4 bg-white border-2 my-5">
      <n-text class="text-3xl font-[500] mb-5 block"> Leave a review </n-text>
      <form action="" class="space-y-3">
        <n-text class="block select-none"> Name : </n-text>
        <BaseInput
          v-model="formData.name"
          type="text"
          :bordered="true"
          name="name"
          BaseInputClass="w-full p-2"
          placeholder=" "
        />
        <n-text class="block select-none"> Review: </n-text>

        <BaseInput
          v-model="formData.review"
          type="textarea"
          name="review"
          :bordered="true"
          rows="4"
          cols="50"
          BaseInputClass="w-full p-2 border"
          placeholder=" "
        />

        <n-text class="block select-none"> Rating: </n-text>

        <BaseSelect
          v-model="formData.rating"
          :options="options"
          base-class="w-full border"
        />

        <n-button
          type="primary"
          class="w-full baseButton"
          :disabled="isFormIncomplete"
          @click="handleSubmit"
        >
          Submit
        </n-button>
      </form>
    </div>
  </div>
</template>
