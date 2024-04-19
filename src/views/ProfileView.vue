<template>
  <div class="h-full w-full p-[30px] select-none">
    <!-- -- -->
    <div class="h-[108px] w-[357px] flex">
      <img
        :src="user.avt"
        alt="avatar"
        class="h-[100px] w-[100px] rounded-[5px]"
      />
      <div class="py-[22px] pl-[32px]">
        <p class="font-[500] text-[22px] leading-[30px] text-[#39455B]">
          {{ user.firstName + " " + user.lastName }}
        </p>
        <p class="leading-[22px] text-[14px] font-[400] text-[#80899A]">
          {{ user.email }}
        </p>
      </div>
    </div>
    <!-- -- -->
    <div class="w-full my-[30px] border-solid border-b-[3px] h-full py-[6px]">
      <span
        class="tab"
        @click="currentTab = 'profile'"
        :class="{ active: currentTab === 'profile' }"
      >
        Quản lí tài khoản
      </span>
      <span
        class="tab"
        @click="currentTab = 'activity'"
        :class="{ active: currentTab === 'activity' }"
      >
        Hoạt động của tôi
      </span>
    </div>
    <!-- --- -->
    <component
      :is="currentTab === 'profile' ? Profile : Activity"
      :user="user"
    />
    <!-- --- -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import userAvt from "@/assets/userAvt.png";
import Profile from "@/components/profile/Profile.vue";
import Activity from "@/components/profile/Activity.vue";

const user = {
  avt: userAvt,
  firstName: "Cameron",
  lastName: "Williamson",
  email: "cameronwilliamson@suga.com.vn",
};

const currentTab = ref("profile");
</script>

<style scoped>
.tab {
  cursor: pointer;
  border-bottom: 2px solid transparent;
  z-index: 10;
  padding: 6px 15px 8px;
  color: #39455b;
}

.tab.active {
  border-bottom-color: #faad1b;

  color: #faad1b;
}
</style>
