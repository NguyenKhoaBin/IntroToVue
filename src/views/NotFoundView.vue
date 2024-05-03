<script setup>
import Frame from "@/assets/images/Frame.png";
</script>
<template>
  <div class="flex flex-col items-center justify-center w-full h-full">
    <img :src="Frame" alt="notfound" class="block w-[390px] h-[270px]" />
    <n-h1 class="text-[26px] font-[500] leading-[34px] text-[#1D1D1D]"
      >Không tìm thấy trang</n-h1
    >
    <n-text class="text-[14px] leading-[22px] text-[#1D1D1D] font-[400]"
      >Rất tiếc, chúng tôi không thể tìm thấy trang bạn cần.</n-text
    >
  </div>
</template>
