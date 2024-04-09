<template>
  <div class="flex flex-col items-center">
    <div
      v-if="reviews.length > 0"
      class="w-[470px] py-[45px] px-4 bg-white border-2 my-5"
    >
      <p class="text-3xl font-[500] mb-5">
        Reviews:
      </p>
      <div
        v-for="(review, index) in reviews"
        :key="index"
        class="mt-3"
      >
        <p class="px-8 text-lg">
          {{ review.name }} gave this {{ review.rating }} stars
        </p>
        <p class="px-8 text-lg">
          " {{ review.review }} "
        </p>
      </div>
    </div>

    <div class="w-[470px] py-[45px] px-4 bg-white border-2 my-5">
      <p class="text-3xl font-[500] mb-5">
        Leave a review
      </p>
      <form
        action=""
        class="space-y-3"
      >
        <label
          for="name"
          class="block"
        >Name:</label>
        <input
          id="name"
          v-model="formData.name"
          type="text"
          name="name"
          class="w-full p-2 border"
        >
        <label
          for="review"
          class="block"
        >Review:</label>
        <textarea
          id="review"
          v-model="formData.review"
          name="review"
          rows="4"
          class="w-full p-2 border"
          cols="50"
        />
        <label
          class="block"
          for="rating"
        >Rating:</label>
        <select
          id="rating"
          v-model="formData.rating"
          name="rating"
          class="w-full p-2 border"
        >
          <option
            v-for="rating in [1, 2, 3, 4, 5]"
            :key="rating"
            :value="rating"
          >
            {{ rating }}
          </option>
        </select>
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
export default {
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
