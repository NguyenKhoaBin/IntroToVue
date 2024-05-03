<script setup lang="ts">
import { ref, computed } from "vue";
import { NImage, NButton, NText, NFlex, NSpace, NUl, NLi, NH1 } from "naive-ui";
import socksGreen from "@/assets/images/socks_green.jpg";
import socksBlue from "@/assets/images/socks_blue.jpg";

const imageUrl = ref<string>(socksGreen);
const inStock = ref<boolean>(true);
const total = ref<number>(0);

const updateStockAndUrl = (value: boolean) => {
  inStock.value = value;
  imageUrl.value = inStock.value ? socksGreen : socksBlue;
};

const addToCart = () => {
  total.value++;
};

const stockStatus = computed<string>(() => {
  return inStock.value ? "In Stock" : "Out of Stock";
});

const buttonColors = computed<string[]>(() => {
  return inStock.value ? ["#258A00", "#0000FF"] : ["#d8d8d8", "#d8d8d8"];
});
</script>

<template>
  <div class="h-full select-none">
    <div class="bg-[#F2F2F2] h-full min-h-screen-navbar px-20">
      <n-flex class="py-12">
        <n-space
          class="p-3 border border-solid"
          align="center"
          justify="center"
        >
          <n-image
            :src="imageUrl"
            alt="Stock"
            width="430"
            height="420"
            object-fit="cover"
          />
        </n-space>
        <div class="w-full flex-1 space-y-3 pl-[60px]">
          <n-space align="end" justify="space-between">
            <n-h1 class="text-5xl font-bold text"> Vue Mastery Socks </n-h1>

            <n-space
              class="bg-white border text-xl font-[400] h-[90px] w-[120px]"
              align="center"
              justify="center"
            >
              <n-text>Cart({{ total }})</n-text>
            </n-space>
          </n-space>
          <n-space vertical size="medium" class="text-2xl font-[400]">
            <n-text>{{ stockStatus }}</n-text>
          </n-space>
          <n-text class="text-2xl font-[450]"> Shipping: Free </n-text>
          <n-ul class="ml-8 text-lg">
            <n-li>80% cotton</n-li>
            <n-li>20% polyester</n-li>
            <n-li>Gender-neutral</n-li>
          </n-ul>

          <n-space vertical size="medium">
            <n-button
              size="large"
              :color="buttonColors[0]"
              :circle="true"
              @mouseenter="updateStockAndUrl(true)"
            />
            <n-button
              size="large"
              :color="buttonColors[1]"
              :circle="true"
              @mouseenter="updateStockAndUrl(false)"
            />

            <n-button
              :disabled="!inStock"
              class="baseButton"
              type="default"
              @click="addToCart"
            >
              Add to cart
            </n-button>
          </n-space>
        </div>
      </n-flex>
    </div>
  </div>
</template>

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
