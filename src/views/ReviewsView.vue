<template>
  <div class="flex flex-col items-center">
    <div
      v-if="reviews.length > 0"
      class="w-[600px] py-[45px] px-4 bg-white border-2 my-5"
    >
      <p class="text-3xl font-[500] mb-5">Reviews:</p>
      <div v-for="(review, index) in reviews" :key="index" class="mt-3">
        <p class="px-8 text-lg">
          {{ review.name }} gave this {{ review.rating }} stars
        </p>
        <p class="px-8 text-lg">" {{ review.review }} "</p>
      </div>
    </div>

    <div class="w-[500px] py-[45px] px-4 bg-white border-2 my-5">
      <p class="text-3xl font-[500] mb-5">Leave a review</p>
      <form action="" class="space-y-3">
        <BaseInput
          id="name"
          v-model="formData.name"
          type="text"
          name="name"
          label="Name"
          BaseLabelClass="block"
        />

        <BaseInputArea
          id="review"
          v-model="formData.review"
          name="review"
          label="Review:"
          rows="4"
          cols="50"
          BaseInputClass="w-full p-2 border"
          BaseLabelClass="block"
        />

        <BaseSelect
          v-model="formData.rating"
          id="rating"
          label="Rating:"
          labelClass="block"
        >
          <option
            v-for="rating in [1, 2, 3, 4, 5]"
            :key="rating"
            :value="rating"
          >
            {{ rating }}
          </option>
        </BaseSelect>

        <button type="button" class="baseButton" @click="handleSubmit">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import BaseInput from "@/components/customInput/BaseInput.vue";
import BaseSelect from "@/components/customInput/BaseSelect.vue";
import BaseInputArea from "@/components/customInput/BaseInputArea.vue";

const reviews = ref([]);
const formData = ref({
  name: "",
  review: "",
  rating: "1",
});

const isFormIncomplete = computed(() => {
  return [
    formData.value.name,
    formData.value.review,
    formData.value.rating,
  ].some((field) => !field);
});

const handleSubmit = () => {
  if (isFormIncomplete.value) {
    alert("Review is incomplete. Please fill out every field.");
    return;
  }
  reviews.value.push({
    name: formData.value.name,
    review: formData.value.review,
    rating: formData.value.rating,
  });
  // console.log(reviews.value);
};
</script>
