<script setup lang="ts">
import { useRouter, RouterLink } from "vue-router";
import { useAuthStore } from "../../stores/authStore";

import { computed, ref } from "vue";
import { NButton, NForm, NFormItem, NInput } from "naive-ui";

interface FormModel {
  email: string | null;
}

const formRef = ref<HTMLElement | null>(null);
const modelRef = ref<FormModel>({
  email: null,
});
const model = computed(() => modelRef.value);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const authStore = useAuthStore();
const loading = ref(false);
const isLoading = computed(() => loading.value);
const router = useRouter();

const rules = {
  email: [
    {
      required: true,
      validator(rule: any, value: string | null) {
        if (!value) {
          return new Error("Email không được trống");
        } else if (!emailRegex.test(value)) {
          return new Error("Email không đúng định dạng");
        }
        return true;
      },
      trigger: ["input", "blur"],
    },
  ],
};

const onSubmit = () => {
  console.log("Email:", model.value.email);
  loading.value = true;
  setTimeout(() => {
    authStore.isAuthenticated = true;
    router.push("/");
  }, 2000);
};
</script>

<template>
  <div
    class="bg-[#fff] w-[560px] absolute min-h-[740px] h-fit top-[80px] left-[785px] rounded-[15px] p-[50px] boxShadow"
  >
    <img
      src="@/assets/images/SmallLogo.png"
      alt="SmallLogo"
      class="w-[104px] h-[24.77px] text-[#010101]"
    />
    <div class="mt-[83.53px] w-full">
      <n-h3
        class="text-[#1D1D1D] font-[700] text-[36px] leading-[48px] mb-[12px] text-left"
      >
        Quên mật khẩu
      </n-h3>
      <n-text class="font-[400] leading-[22px] size-[14px] text-[#9F9F9F]">
        Vui lòng điền địa chỉ email đã đăng kí để chúng tôi xác minh tài khoản
        của bạn
      </n-text>
    </div>

    <n-form
      ref="formRef"
      :model="model"
      :rules="rules"
      @submit.prevent="onSubmit"
    >
      <n-form-item path="email">
        <n-input
          v-model:value="model.email"
          type="text"
          class="!w-[460px] h-[60px] items-center font-[450] border border-solid border-[#9F9F9F] outline-none"
          placeholder="Email của bạn"
          @keydown.enter.prevent
        />
      </n-form-item>

      <n-button
        attr-type="submit"
        :loading="isLoading"
        class="baseButton w-[460px] mt-[45px]"
        :disabled="model.email == null || !emailRegex.test(model.email)"
      >
        Gửi
      </n-button>
    </n-form>

    <RouterLink
      to="/signin"
      class="w-full h-[22px] mx-auto mt-[115px] text-center cursor-pointer text-[#7A7A7A] font-[700] text-[14px] leading-[22px] flex items-center justify-center gap-4"
    >
      <img
        src="@/assets/images/back.png"
        alt="back"
        class="h-[10px] w-[12px]"
      />
      Quay lại Đăng nhập
    </RouterLink>
  </div>
</template>

<style scoped>
.boxShadow {
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
}

.buttonShadow {
  box-shadow: 0px 2px 4px 0px #0000001a;
}
</style>
