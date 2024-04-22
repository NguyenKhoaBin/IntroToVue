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
      :activity="activity"
    />
    <!-- --- -->
  </div>
</template>

<script setup>
// import { onUpdated, ref, onBeforeMount } from "vue";
import userAvt from "@/assets/userAvt.png";
import Profile from "@/components/profile/Profile.vue";
import Activity from "@/components/profile/Activity.vue";
import axios from "axios";
import { onMounted, ref } from "vue";
import { useAuthStore } from "@/stores/authStore";

const user = ref({
  avt: "",
  firstName: "",
  lastName: "",
  email: "",
  userName: "",
});

const activity = ref();

const authStore = useAuthStore();

const currentTab = ref("profile");

const headers = {
  Authorization: `Bearer ${authStore.auth.access_token}`,
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
