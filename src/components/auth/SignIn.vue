<template>
  <div
    class="bg-[#fff] w-[560px] absolute h-fit min-h-[740px] top-[80px] left-[785px] rounded-[15px] p-[50px] boxShadow"
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
          :type="inputType"
          placeholder="Mật khẩu"
          class="baseInput"
        />
        <ErrorMessage name="password" class="block mt-2 text-orange-700" />
        <img
          v-if="inputType == 'password'"
          src="@/assets/hide.png"
          alt="hide"
          class="w-4 h-4 text-[#7A7A7A] absolute top-6 right-5 cursor-pointer"
          @click="toggleInputType"
        />
        <img
          v-if="inputType !== `password`"
          src="@/assets/icon_Eye-open.png"
          alt="hide"
          class="w-4 h-4 text-[#7A7A7A] absolute top-6 right-5 cursor-pointer"
          @click="toggleInputType"
        />
        <p class="mt-2 text-[14px] leading-[22px] text-orange-700">
          {{ errorMessage }}
        </p>
      </div>

      <button
        type="submit"
        class="w-[460px] h-[60px] py-[14px] px-[30px] gap-[10px] rounded-[4px] bg-[#FAAD1B] shadow-md text-[18px] leading-[20px] font-[600] buttonShadow"
      >
        Đăng nhập
      </button>
    </VForm>

    <RouterLink
      to="/forgot"
      class="w-[156px] h-[22px] mx-auto block mt-[115px] text-center cursor-pointer text-[#9F9F9F] font-[700] text-[14px] leading-[22px]"
    >
      Quên mật khẩu?
    </RouterLink>
  </div>
</template>
<script setup>
import { Field as VField, Form as VForm, ErrorMessage } from "vee-validate";
import { useRouter, RouterLink } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import * as yup from "yup";
import { ref, computed } from "vue";
import axios from "axios";

const inputType = ref("password");
const errorMessage = ref("");
const toggleInputType = () => {
  inputType.value = inputType.value === "password" ? "text" : "password";
};
const router = useRouter();
const authStore = useAuthStore();
const schema = yup.object({
  email: yup
    .string()
    .email("Email không đúng định dạng")
    .required("Email không được để trống"),
  password: yup
    .string()
    .min(6, "Mật khẩu phải chứa ít nhất 6 kí tự")
    .required("Mật khẩu không được để trống"),
});

function onSubmit(values) {
  const loginUrl = "http://hrm-dev.w3suga.com:8282/api/v1/login?is_admin=1";

  const data = {
    username: values.email,
    password: values.password,
  };

  axios
    .post(loginUrl, data)
    .then((response) => {
      authStore.isAuthenticated = true;
      authStore.auth = response.data;
      console.log(response.data);
      router.push("/");
    })
    .catch((error) => {
      if (error.response) {
        console.error("Error:", error.response.data);
        errorMessage.value = error.response.data.message;
      }
    });
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
