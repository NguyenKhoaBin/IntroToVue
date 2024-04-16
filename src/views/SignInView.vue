<template>
  <div class="bg-[#000]">
    <div
      class="w-full h-[900px] bg-[#f5f5f5] relative mx-auto overflow-hidden select-none"
    >
      <img
        src="@/assets/LogoSuga.png"
        alt="LogoSuga"
        class="w-[1081.45px] h-[915px] top-[-15px] left-[-387px] absolute"
      />
      <div
        class="bg-[#fff] w-[560px] absolute h-[740px] top-[80px] left-[785px] rounded-[15px] p-[50px] boxShadow"
      >
        <img
          src="@/assets/SmallLogo.png"
          alt="SmallLogo"
          class="w-[104px] h-[24.77px] text-[#010101]"
        />
        <h3
          class="mt-[92.23px] mb-[70px] text-[#1D1D1D] font-bold text-4xl leading-[54px] text-left"
        >
          Welcome!
        </h3>

        <VForm :validation-schema="schema" @submit="onSubmit">
          <div class="">
            <VField
              name="email"
              type="email"
              placeholder="Email của bạn"
              class="baseInput"
            />

            <ErrorMessage name="email" class="block mt-2 text-orange-700" />
          </div>
          <div class="mt-[20px] mb-[60px] relative">
            <VField
              name="password"
              type="password"
              placeholder="Mật khẩu"
              class="baseInput"
            />
            <ErrorMessage name="password" class="block mt-2 text-orange-700" />
            <img
              src="@/assets/hide.png"
              alt="hide"
              class="w-4 h-4 text-[#7A7A7A] absolute top-6 right-5 cursor-pointer"
            />
          </div>

          <button
            type="submit"
            class="w-[460px] h-[60px] py-[14px] px-[30px] gap-[10px] rounded-[4px] bg-[#FAAD1B] shadow-md text-[18px] leading-[20px] font-[600] buttonShadow"
          >
            Đăng nhập
          </button>
        </VForm>
        <div class="w-[156px] h-[22px] mx-auto mt-[115px]">
          <p
            class="text-center cursor-pointer text-[#9F9F9F] font-[600] text-[14px] leading-[22px]"
          >
            Quên mật khẩu?
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Field as VField, Form as VForm, ErrorMessage } from "vee-validate";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import * as yup from "yup";

const router = useRouter();
const authStore = useAuthStore();
const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

function onSubmit(values) {
  authStore.isAuthenticated = true;
  authStore.user = {
    email: values.email,
    password: values.password,
  };
  router.push("/");
}
</script>

<style scoped>
.boxShadow {
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
}

.buttonShadow {
  box-shadow: 0px 2px 4px 0px #0000001a;
}
</style>
