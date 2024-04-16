<template>
  <div>
    <div class="bg-[#F2F2F2] h-full min-h-screen-navbar px-20">
      <div class="flex w-full h-full py-12">
        <div
          class="h-[420px] w-[430px] p-4 bg-[#F2F2F2] border-gray-300 border-solid border-2 items-center"
        >
          <img :src="imageUrl" alt="Stock" class="w-full h-full" />
        </div>
        <div class="w-full flex-1 space-y-3 pl-[60px]">
          <div class="flex items-end justify-between">
            <h1 class="text-5xl font-bold text">Vue Mastery Socks</h1>
            <div
              class="h-[90px] w-[130px] items-center flex bg-white border justify-center text-xl font-[400]"
            >
              <span>Cart({{ total }})</span>
            </div>
          </div>
          <div class="text-2xl font-[450]">
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
          </div>
          <p class="text-2xl font-[450]">Shipping: Free</p>
          <ul class="ml-8 text-lg">
            <li>80% cotton</li>
            <li>20% polyester</li>
            <li>Gender-neutral</li>
          </ul>

          <span
            class="h-[50px] w-[50px] rounded-full bg-[#258A00] block"
            @mouseenter="updateStockAndUrl(true)"
          ></span>
          <span
            class="h-[50px] w-[50px] rounded-full bg-[#0000FF] block"
            @mouseenter="updateStockAndUrl(false)"
          ></span>

          <button
            :disabled="!inStock"
            class="baseButton custom-button"
            @click="addToCart"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import socksGreen from "@/assets/socks_green.jpg";
import socksBlue from "@/assets/socks_blue.jpg";

const imageUrl = ref(socksGreen);
const inStock = ref(true);
const total = ref(0);

const updateStockAndUrl = (value) => {
  inStock.value = value;
  imageUrl.value = inStock.value ? socksGreen : socksBlue;
};

const addToCart = () => {
  total.value++;
};
</script>

<style scoped>
.custom-button:disabled {
  background-color: #d8d8d8;
}
.min-h-screen-navbar {
  min-height: calc(100vh - 65px);
}
</style>
