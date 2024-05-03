<script setup lang="ts">
import { onMounted, ref } from "vue";
import userAvt from "@/assets/images/userAvt.png";
import Profile from "../components/profile/Profile.vue";
import Activity from "../components/profile/Activity.vue";
import axios from "axios";
import { useAuthStore } from "../stores/authStore";
import { User } from "../types/type";

const user = ref<User>({
  avt: "",
  firstName: "",
  lastName: "",
  email: "",
  userName: "",
});

const activity = ref<any>();

const authStore = useAuthStore();

const currentTab = ref<string>("profile");

const headers = {
  Authorization: `Bearer ${authStore.user.access_token}`,
};

onMounted(async () => {
  try {
    const res_profile = await axios.get(
      "http://hrm-dev.w3suga.com:8282/api/v1/admin/me",
      { headers }
    );
    const res_activity = await axios.get(
      "http://hrm-dev.w3suga.com:8282/api/v1/admin/me/activity-logs?limit=10&page=1&access_mode=1&q=create",
      { headers }
    );
    const userData = res_profile.data;
    console.log(userData);
    user.value.avt = userData.avatar || userAvt;
    user.value.firstName = userData.admin.firstname || "";
    user.value.lastName = userData.admin.lastname || "";
    user.value.email = userData.admin.contact_email || "";
    user.value.userName = userData.username || "";

    const activityData = res_activity.data;
    activity.value = activityData.data;
  } catch (error) {
    console.error("Error fetching user data :", error);
  }
});
</script>

<template>
  <div class="h-fit w-full p-[30px] select-none">
    <!-- -- -->
    <div class="h-[108px] w-[357px] flex">
      <n-image
        width="100"
        height="100"
        class="rounded-[5px]"
        :src="user.avt"
        v-if="!(user.avt == '')"
      />
      <n-skeleton
        v-if="user.avt == ''"
        :width="100"
        :height="100"
        :sharp="false"
        size="medium"
      />
      <div class="py-[22px] pl-[32px]">
        <n-text
          v-if="user.firstName || user.lastName"
          class="font-[500] text-[22px] leading-[30px] block text-[#39455B]"
        >
          {{ user.firstName + " " + user.lastName }}
        </n-text>
        <n-skeleton
          v-if="user.firstName == '' || user.lastName == ''"
          :width="200"
          :height="30"
          :sharp="false"
          size="medium"
          class="block"
        />
        <n-text
          class="leading-[22px] text-[14px] font-[400] text-[#80899A] block"
          v-if="!(user.email == '')"
        >
          {{ user.email }}
        </n-text>
        <n-skeleton
          v-if="user.email == ''"
          :width="200"
          :height="30"
          :sharp="false"
          size="medium"
          class="block my-2"
        />
      </div>
    </div>
    <!-- -- -->
    <div class="w-full my-[30px] border-solid border-b-[3px] h-fit py-[6px]">
      <span
        class="tab"
        :class="{ active: currentTab === 'profile' }"
        @click="currentTab = 'profile'"
      >
        Quản lí tài khoản
      </span>
      <span
        class="tab"
        :class="{ active: currentTab === 'activity' }"
        @click="currentTab = 'activity'"
      >
        Hoạt động của tôi
      </span>
    </div>
    <!-- --- -->
    <component
      :is="currentTab === 'profile' ? Profile : Activity"
      :user="user"
      :activity="activity"
    />
    <!-- --- -->
  </div>
</template>

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
