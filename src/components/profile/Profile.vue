<script setup lang="ts">
import { ref } from "vue";

import { NButton } from "naive-ui";
import { User } from "../../types/type";
defineProps({
  user: {
    type: Object as () => User,
    default: false,
  },
});
const showModal = ref(false);
</script>
<template>
  <div class="w-[1200px] h-fit">
    <div class="flex gap-[20px]">
      <n-space>
        <n-text
          class="text-[#39455B] font-[500] leading-[22px] text-[14px] block"
        >
          Họ
        </n-text>
        <base-input
          :model-value="user.firstName"
          BaseInputClass="!w-[590px] h-[38px] px-[8px] outline-none  text-[#5C6678] border border-[#CDD2DB]"
          placeholder=""
        />
      </n-space>

      <n-space>
        <n-text
          class="text-[#39455B] font-[500] leading-[22px] text-[14px] block"
        >
          Tên
        </n-text>
        <base-input
          :model-value="user.lastName"
          BaseInputClass="!w-[590px] h-[38px] px-[8px]  outline-none  text-[#5C6678] border border-[#CDD2DB]"
          placeholder=""
        />
      </n-space>
    </div>
    <n-flex class="my-[20px]">
      <n-text
        class="text-[#39455B] font-[500] leading-[22px] text-[14px] block"
      >
        Tên đăng nhập
      </n-text>
      <base-input
        label="Tên đăng nhập"
        :model-value="user.userName"
        BaseInputClass="w-[1197px]  h-[38px] px-[8px]  outline-none  text-[#5C6678] border border-[#CDD2DB]"
        placeholder=""
      />
    </n-flex>
    <n-button
      @click="showModal = true"
      :bordered="false"
      class="text-[14px] p-0 leading-[22px] font-[400] cursor-pointer text-[#FAAD1B] block"
    >
      Đặt lại mật khẩu
    </n-button>
    <n-button
      :bordered="false"
      type="success"
      class="my-5 px-2 py-1 !rounded-sm !border-none !w-[83px] !h-[38px] bg-[#FAAD1B] flex items-center justify-center !hover:bg-black"
    >
      <n-icon>
        <img
          src="@/assets/images/save.png"
          alt="save"
          class="h-[14px] w-[14px] text-white"
        />
      </n-icon>
      <n-text class="block ml-[3px] text-white"> Lưu </n-text>
    </n-button>
    <n-modal
      v-model:show="showModal"
      preset="card"
      class="!w-fit pt-5"
      title="Đổi mật khẩu"
    >
      <ChangePassword @toggle="showModal = false"></ChangePassword>
    </n-modal>
  </div>
</template>
