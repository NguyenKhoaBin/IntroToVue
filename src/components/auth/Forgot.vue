<template>
  <div
    class="bg-[#fff] w-[560px] absolute min-h-[740px] h-fit top-[80px] left-[785px] rounded-[15px] p-[50px] boxShadow"
  >
    <img
      src="@/assets/SmallLogo.png"
      alt="SmallLogo"
      class="w-[104px] h-[24.77px] text-[#010101]"
    />
    <div class="mt-[83.53px] w-full">
      <h3
        class="text-[#1D1D1D] font-[700] text-[36px] leading-[48px] mb-[12px] text-left"
      >
        Quên mật khẩu
      </h3>
      <span class="font-[400] leading-[22px] size-[14px] text-[#9F9F9F]">
        Vui lòng điền địa chỉ email đã đăng kí để chúng tôi xác minh tài khoản
        của bạn
      </span>
    </div>
    <VForm :validation-schema="schema" @submit="submitForgot">
      <div class="my-[60px]">
        <VField
          name="emailReset"
          type="email"
          placeholder="Email của bạn"
          class="baseInput"
        />

        <ErrorMessage name="emailReset" class="block mt-2 text-orange-700" />
      </div>

      <button
        type="submit"
        class="w-[460px] h-[60px] py-[14px] px-[30px] gap-[10px] rounded-[4px] bg-[#FAAD1B] shadow-md text-[18px] leading-[20px] font-[600] buttonShadow"
      >
        <img
          src="@/assets/loading.png"
          alt="loading"
          v-if="isLoading"
          class="h-[25px] w-[25px] animate-spin mx-auto"
        />
        <p v-if="!isLoading">Gửi</p>
      </button>
    </VForm>

    <RouterLink
      to="/signin"
      class="w-full h-[22px] mx-auto mt-[115px] text-center cursor-pointer text-[#7A7A7A] font-[700] text-[14px] leading-[22px] flex items-center justify-center gap-4"
    >
      <img src="@/assets/back.png" alt="back" class="h-[10px] w-[12px]" />
      Quay lại Đăng nhập
    </RouterLink>
  </div>
</template>

<script setup>
import { Field as VField, Form as VForm, ErrorMessage } from "vee-validate";
import { useRouter, RouterLink } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import { computed, ref } from "vue";

import * as yup from "yup";
const authStore = useAuthStore();
const loading = ref(false);
const isLoading = computed(() => loading.value);
const schema = yup.object({
  emailReset: yup
    .string()
    .email("Email không đúng định dạng")
    .required("Email không được để trống"),
});

const router = useRouter();
const submitForgot = () => {
  loading.value = true;
  setTimeout(() => {
    authStore.isAuthenticated = true;
    router.push("/");
  }, 2000);
};
</script>

<style scoped>
.boxShadow {
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
}

.buttonShadow {
  box-shadow: 0px 2px 4px 0px #0000001a;
}
</style>
