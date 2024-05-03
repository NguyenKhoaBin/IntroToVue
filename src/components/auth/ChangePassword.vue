<script setup lang="ts">
import { useRouter, RouterLink } from "vue-router";
import { NButton, NForm, NFormItem, NInput, useMessage } from "naive-ui";
import { CloseOutline } from "@vicons/ionicons5";
import { ref, computed } from "vue";
import axios from "axios";

const formRef = ref<HTMLElement | null>(null);
const modelRef = ref({
  password: null as string | null,
  newPassword: null as string | null,
  comfirmNewPassword: null as string | null,
});
const model = computed(() => modelRef.value);

function validatePasswordSame(rule: any, value: string) {
  return value === modelRef.value.newPassword;
}

const message = useMessage();

const submit = () => {
  message.success("Đổi mật khẩu thành công");
};

const rules = {
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
  newPassword: [
    {
      required: true,
      validator(rule: any, value: string | null) {
        if (!value) {
          return new Error("Mật khẩu mới không được trống");
        } else if (value.length < 6) {
          return new Error("Mật khẩu phải chứa ít nhất 6 kí tự");
        }

        return true;
      },
      trigger: ["input", "blur"],
    },
  ],
  comfirmNewPassword: [
    {
      required: true,
      message: "Xác nhận mật khẩu không được trống",
      trigger: ["input", "blur"],
    },

    {
      validator: validatePasswordSame,
      message: "Mật khẩu xác nhận không khớp!",
      trigger: ["blur", "input"],
    },
  ],
};
const handleSubmit = (emit: any) => {
  emit("toggle", false);
  submit();
};
</script>
<template>
  <div>
    <n-form
      ref="formRef"
      :model="model"
      :rules="rules"
      class="min-h-[200px] h-fit w-[500px] my-auto mx-auto flex flex-col justify-evenly"
      label-placement="left"
      label-width="125"
    >
      <n-form-item path="password" label="Mật khẩu cũ">
        <n-input
          v-model:value="model.password"
          type="password"
          placeholder="Mật khẩu cũ"
          show-password-on="mousedown"
          @keydown.enter.prevent
        />
      </n-form-item>
      <n-form-item path="newPassword" label="Mật khẩu mới">
        <n-input
          v-model:value="model.newPassword"
          type="password"
          placeholder="Mật khẩu mới"
          show-password-on="mousedown"
          @keydown.enter.prevent
        />
      </n-form-item>
      <n-form-item path="comfirmNewPassword" label="Nhập lại mật khẩu">
        <n-input
          v-model:value="model.comfirmNewPassword"
          type="password"
          placeholder="Nhập lại mật khẩu"
          show-password-on="mousedown"
          @keydown.enter.prevent
        />
      </n-form-item>

      <n-space justify="end">
        <n-button @click="$emit('toggle', false)" class="rounded-[4px]">
          Hủy</n-button
        >
        <n-button
          @click="handleSubmit($emit)"
          :disabled="
            model.password == null ||
            model.password.length < 6 ||
            model.newPassword == null ||
            model.newPassword.length < 6 ||
            model.newPassword !== model.comfirmNewPassword
          "
          class="bg-[#FAAD1B] text-white rounded-[4px]"
        >
          Hoàn Tất</n-button
        >
      </n-space>
    </n-form>
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
