<template>
  <div class="flex flex-col items-center">
    <div
      v-if="reviews.length > 0"
      class="w-[470px] py-[45px] px-4 bg-white border-2 my-5"
    >
      <p class="text-3xl font-[500] mb-5">Reviews:</p>
      <div v-for="(review, index) in reviews" :key="index" class="mt-3">
        <p class="px-8 text-lg">
          {{ review.name }} gave this {{ review.rating }} stars
        </p>
        <p class="px-8 text-lg">" {{ review.review }} "</p>
      </div>
    </div>

    <div class="w-[470px] py-[45px] px-4 bg-white border-2 my-5">
      <p class="text-3xl font-[500] mb-5">Leave a review</p>
      <form action="" class="space-y-3">
        <base-input
          id="name"
          v-model="formData.name"
          type="text"
          name="name"
          label="Name"
          BaseLabelClass="block"
          BaseInputClass="w-full p-2 border"
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
          baseClass="w-full p-2 border"
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

        <button
          type="button"
          class="bg-[#435264] block mx-auto h-[60px] w-[160px] text-center rounded-md text-white text-lg"
          @click="handleSubmit"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import BaseInput from "../components/customInput/BaseInput.vue";
import BaseSelect from "../components/customInput/BaseSelect.vue";
import BaseInputArea from "../components/customInput/BaseInputArea.vue";

export default {
  components: {
    BaseSelect,
    BaseInput,
    BaseInputArea,
  },
  data() {
    return {
      reviews: [],
      formData: {
        name: "",
        review: "",
        rating: "1",
      },
    };
  },
  computed: {
    isFormIncomplete() {
      return [
        this.formData.name,
        this.formData.review,
        this.formData.rating,
      ].some((field) => !field);
    },
  },
  methods: {
    handleSubmit() {
      if (this.isFormIncomplete) {
        alert("Review is incomplete. Please fill out every field.");
        return;
      }
      this.reviews.push({
        name: this.formData.name,
        review: this.formData.review,
        rating: this.formData.rating,
      });
      // console.log(this.reviews);
    },
  },
};
</script>
