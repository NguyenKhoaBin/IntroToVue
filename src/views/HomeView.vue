<template>
  <div>
    <div class="bg-[#F2F2F2] h-full min-h-screen-navbar px-20">
      <div class="flex w-full h-full py-12">
        <div
          class="h-[420px] w-[430px] p-4 bg-[#F2F2F2] border-gray-300 border-solid border-2 items-center"
        >
          <img
            :src="`${imageUrl}`"
            alt="Stock"
            class="w-full h-full"
          >
        </div>
        <div class="w-full flex-1 space-y-3 pl-[60px]">
          <div class="flex items-end justify-between">
            <h1 class="text-5xl font-bold text">
              Vue Mastery Socks
            </h1>
            <div
              class="h-[90px] w-[130px] items-center flex bg-white border justify-center text-xl font-[400]"
            >
              <span>Cart({{ total }})</span>
            </div>
          </div>
          <div class="text-2xl font-[450]">
            <p v-if="inStock">
              In Stock
            </p>
            <p v-else>
              Out of Stock
            </p>
          </div>
          <p class="text-2xl font-[450]">
            Shipping: Free
          </p>
          <ul class="ml-8 text-lg">
            <li>80% cotton</li>
            <li>20% polyester</li>
            <li>Gender-neutral</li>
          </ul>

          <span
            class="h-[50px] w-[50px] rounded-full bg-[#258A00] block"
            @mouseenter="updateStockAndUrl(true)"
          />
          <span
            class="h-[50px] w-[50px] rounded-full bg-[#0000FF] block"
            @mouseenter="updateStockAndUrl(false)"
          />

          <button
            :disabled="!inStock"
            class="py-4 ml-3 text-white rounded-md shadow-sm custom-button px-7 text-md shadow-black"
            @click="addToCart"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import socksGreen from "../assets/socks_green.jpg";
import socksBlue from "../assets/socks_blue.jpg";

export default {
  data() {
    return {
      imageUrl: socksGreen,
      inStock: true,
      total: 0,
    };
  },
  computed: {
    isFormIncomplete() {
      return (
        !this.formData.name || !this.formData.review || !this.formData.rating
      );
    },
  },
  methods: {
    updateStockAndUrl(value) {
      this.inStock = value;
      this.imageUrl = this.inStock ? socksGreen : socksBlue;
    },
    addToCart() {
      this.total++;
    },
  },
};
</script>

<style scoped>
.custom-button {
  background-color: #445365;
}

.custom-button:disabled {
  background-color: #d8d8d8;
}
.min-h-screen-navbar {
  min-height: calc(100vh - 65px);
}
</style>
