<template>
  <div class="w-[1200px] h-[270px]">
    <div class="flex gap-[20px]">
      <base-input
        label="Họ"
        :modelValue="user.firstName"
        BaseLabelClass="text-[#39455B] font-[500] leading-[22px] text-[14px]"
        BaseInputClass="w-[590px] h-[38px] px-[8px] outline-none py-[10px] text-[#5C6678] border border-[#CDD2DB]"
      />
      <base-input
        label="Tên"
        :modelValue="user.lastName"
        BaseLabelClass="text-[#39455B] font-[500] leading-[22px] text-[14px]"
        BaseInputClass="w-[590px] h-[38px] px-[8px]  outline-none py-[10px] text-[#5C6678] border border-[#CDD2DB]"
      />
    </div>
    <div class="my-[20px]">
      <base-input
        label="Tên đăng nhập"
        :modelValue="user.email"
        BaseLabelClass="text-[#39455B] font-[500] leading-[22px] text-[14px]"
        BaseInputClass="w-[1197px]  h-[38px] px-[8px]  outline-none py-[10px] text-[#5C6678] border border-[#CDD2DB]"
      />
    </div>
    <p class="text-[14px] leading-[22px] font-[400]">Đặt lại mật khẩu</p>
    <div class="pt-5 mt-5 w-[83px]">
      <span
        class="flex gap-2 items-center justify-center h-[38px] bg-[#FAAD1B] w-full px-1 text-white py-1/2 cursor-pointer"
      >
        <img
          src="@/assets/save.png"
          alt="save"
          class="h-[14px] w-[14px] text-white"
        />
        lưu</span
      >
    </div>
  </div>
</template>
<script setup>
import { object } from "yup";
import BaseInput from "@/components/customInput/BaseInput.vue";

defineProps({
  user: {
    type: [object],
    default: false,
  },
});
</script>
