<template>
  <div
    class="w-[500px] h-fit min-h-[336px] boxShadow rounded-sm bg-white -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 relative p-5"
  >
    <div class="flex items-center justify-center w-full">
      <h1 class="text-[#02142E] text-[18px] font-[500] leading-[24px] flex-1">
        Đổi mật khẩu
      </h1>
      <img
        src="@/assets/icon_Close.png"
        alt="icon_Close"
        class="text-[#80899A] h-[14px] w-[14px] cursor-pointer"
      />
    </div>
    <div class="my-5">
      <VForm :validation-schema="schema">
        <div class="mt-[60px]">
          <div class="flex items-center gap-6">
            <label
              for="password"
              class="text-[#39455B] w-[30%] text-end font-[14px] leading-[22px]"
              >Mật khẩu cũ</label
            >
            <div
              class="h-[38px] w-[296px] border flex items-center border-[#CDD2DB] rounded-sm py-2 pl-[16px] pr-[10px]"
            >
              <VField
                id="password"
                name="password"
                type="password"
                class="flex-1 h-full border-none outline-none"
              />
              <img
                src="@/assets/icon_Eye-open.png"
                alt="open"
                class="text-[#80899A] w-[16px] h-[16px] cursor-pointer"
              />
            </div>
          </div>
          <ErrorMessage
            name="password"
            class="block mt-2 ml-[65px] text-center text-orange-700"
          />
        </div>

        <!-- -- -->
        <div class="my-5">
          <div class="flex items-center gap-6">
            <label
              for="newPassword"
              class="text-[#39455B] w-[30%] text-end font-[14px] leading-[22px]"
              >Mật khẩu mới</label
            >
            <div
              class="h-[38px] w-[296px] border flex items-center border-[#CDD2DB] rounded-sm py-2 pl-[16px] pr-[10px]"
            >
              <VField
                id="newPassword"
                name="newPassword"
                type="password"
                class="flex-1 h-full border-none outline-none"
              />
              <img
                src="@/assets/icon_Eye-open.png"
                alt="open"
                class="text-[#80899A] w-[16px] h-[16px] cursor-pointer"
              />
            </div>
          </div>
          <ErrorMessage
            name="newPassword"
            class="block mt-2 ml-[90px] text-center text-orange-700"
          />
        </div>

        <!-- -- -->
        <div class="mb-5">
          <div class="flex items-center gap-6">
            <label
              for="confirmPasword"
              class="text-[#39455B] w-[30%] text-end font-[14px] leading-[22px]"
              >Nhập lại mật khẩu</label
            >
            <div
              class="h-[38px] w-[296px] border flex items-center border-[#CDD2DB] rounded-sm py-2 pl-[16px] pr-[10px]"
            >
              <VField
                id="confirmPasword"
                name="confirmPasword"
                type="password"
                class="flex-1 h-full border-none outline-none"
              />
              <img
                src="@/assets/icon_Eye-open.png"
                alt="open"
                class="text-[#80899A] w-[16px] h-[16px] cursor-pointer"
              />
            </div>
          </div>
          <ErrorMessage
            name="confirmPasword"
            class="block mt-2 ml-[105px] text-center text-orange-700"
          />
        </div>
        <div class="flex items-center justify-end gap-2">
          <button
            class="h-[38px] w-[59px] bg-[#E7EAF0] rounded-sm py-1/2 px-1 text-[#FFFFFF] text-[14px] leading-[22px] text-center"
          >
            Hủy
          </button>
          <button
            type="submit"
            class="h-[38px] w-[91px] bg-[#FAAD1B] rounded-sm py-1/2 px-1 text-[#FFFFFF] text-[14px] leading-[22px] text-center"
          >
            Hoàn tất
          </button>
        </div>
      </VForm>
    </div>
  </div>
</template>
<style scoped>
.boxShadow {
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
}
</style>

<script setup>
import { Field as VField, Form as VForm, ErrorMessage } from "vee-validate";
import { useRouter, RouterLink } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import { computed, ref } from "vue";

import * as yup from "yup";
const authStore = useAuthStore();

const schema = yup.object({
  password: yup
    .string()
    .min(8, "Mật khẩu phải chứa ít nhất 8 ký tự")
    .required("Mật khẩu không được trống"),
  newPassword: yup
    .string()
    .required("Mật khẩu mới không được trống")
    .min(8, "Mật khẩu mới phải chứa ít nhất 8 ký tự")
    .oneOf(
      [yup.ref("confirmPassword")],
      "Mật khẩu mới và xác nhận mật khẩu phải giống nhau"
    ),
  confirmPassword: yup
    .string()
    .required()
    .min(8, "Xác nhận mật khẩu phải chứa ít nhất 8 ký tự")
    .oneOf(
      [yup.ref("newPassword")],
      "Mật khẩu mới và xác nhận mật khẩu phải giống nhau"
    ),
});
</script>
