<script setup lang="ts">
import { useRouter, RouterLink } from "vue-router";
import { useAuthStore } from "../../stores/authStore";
import { ref, computed } from "vue";
import { NButton, NForm, NFormItem, NInput, NText } from "naive-ui";
import axios from "axios";

interface LoginFormModel {
  email: string | null;
  password: string | null;
}

const formRef = ref<HTMLElement | null>(null);
const modelRef = ref<LoginFormModel>({
  email: null,
  password: null,
});
const model = computed(() => modelRef.value);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  password: [
    {
      required: true,
      validator(rule: any, value: string | null) {
        if (!value) {
          return new Error("Mật khẩu không được trống");
        } else if (value.length < 6) {
          return new Error("Mật khẩu phải chứa ít nhất 6 kí tự");
        }
        return true;
      },
      trigger: ["input", "blur"],
    },
  ],
};

const errorMessage = ref("");

const router = useRouter();
const authStore = useAuthStore();
const loading = ref(false);

function onSubmit() {
  loading.value = true;
  const loginUrl = "http://hrm-dev.w3suga.com:8282/api/v1/login?is_admin=1";

  const data = {
    username: model.value.email,
    password: model.value.password,
  };

  axios
    .post(loginUrl, data)
    .then((response) => {
      authStore.isAuthenticated = true;
      authStore.login(response.data);
      loading.value = false;
      router.push("/");
    })
    .catch((error) => {
      if (error.response) {
        console.error("Error:", error.response.data);
        errorMessage.value = error.response.data.message;
        loading.value = false;
      }
    });
}
</script>

<template>
  <div
    class="bg-[#fff] w-[560px] absolute h-fit min-h-[740px] top-[80px] left-[785px] rounded-[15px] p-[50px] boxShadow"
  >
    <img
      src="@/assets/images/SmallLogo.png"
      alt="SmallLogo"
      class="w-[104px] h-[24.77px] text-[#010101]"
    />
    <n-h3
      class="mt-[92.23px] mb-[70px] text-[#1D1D1D] font-bold text-4xl leading-[54px] text-left"
    >
      Welcome!
    </n-h3>

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
      <n-form-item path="password" class="-mt-6">
        <n-input
          v-model:value="model.password"
          type="password"
          class="!w-[460px] h-[60px] items-center font-[450] border border-solid border-[#9F9F9F] outline-none"
          placeholder="Mật khẩu"
          show-password-on="mousedown"
          @keydown.enter.prevent
        />
      </n-form-item>
      <n-text class="text-orange-400">
        {{ errorMessage }}
      </n-text>
      <n-button
        attr-type="submit"
        :loading="loading"
        class="baseButton w-[460px] mt-[45px]"
        :disabled="
          model.email == null ||
          !emailRegex.test(model.email) ||
          model.password == null ||
          !(model.password && model.password.length >= 6)
        "
      >
        Đăng nhập
      </n-button>
    </n-form>

    <RouterLink
      to="/forgot"
      class="w-[156px] h-[22px] mx-auto block mt-[115px] text-center cursor-pointer text-[#9F9F9F] font-[700] text-[14px] leading-[22px]"
    >
      Quên mật khẩu?
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
