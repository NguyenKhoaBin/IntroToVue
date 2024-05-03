<script setup>
import userAvt from "@/assets/images/userAvt.png";
import { NFlex, NText, NButton, NImage, NIcon, NDropdown } from "naive-ui";
import { useAuthStore } from "@/stores/authStore.ts";

import iconNotifi from "@/assets/images/iconNotifi.png";

import {
  ChevronDownOutline,
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
} from "@vicons/ionicons5";

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();

const currentPath = computed(() => {
  let path = route.path;
  if (path.startsWith("/")) {
    path = path.substring(1);
  }
  return path;
});

const renderProfile = () =>
  h(
    NFlex,
    {
      align: "center",
      class: "w-full pb-5 h-fit py-[10px] px-5",
      vertical: true,
    },
    [
      h(NImage, {
        width: 100,
        class: "object-cover mb-5 bg-transparent rounded-full",
        src: userAvt,
      }),
      h(
        NText,
        { class: "block font-[500] text-[14px] text-[#39455B] leading-[22px]" },
        "Cameron Williamson"
      ),
      h(
        NText,
        { class: "block text-[#80899A] text-[12px] font-[400]" },
        "cameronwilliamson@suga.com.vn"
      ),
      h(
        NButton,
        {
          class:
            "rounded-[4px] py-2 w-[187px] h-[38px] bg-[#FAAD1B] text-white text-[14px] font-[500] leading-[22px]",
          onClick: () => {
            router.push("/profile");
          },
        },
        "Xem hồ sơ"
      ),
      h(
        NButton,
        {
          class:
            "rounded-[4px] py-2 w-[187px] h-[38px] bg-white text-[#5C6678] text-[14px] font-[500] leading-[22px]",
          onClick: () => {
            // authStore.isAuthenticated = false;
            // authStore.auth = {};
            authStore.logout();
            router.push("/signin");
          },
        },
        [
          h(NIcon, { class: "block mt-[2px] mr-[2px] text-[16px]" }, () =>
            h(LogoutIcon)
          ),
          h(NText, { class: "block my-auto text-[#80899A]  " }, "Đăng xuất"),
        ]
      ),
    ]
  );

const options = [
  {
    key: "profile",
    type: "render",
    render: renderProfile,
  },
];

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
</script>

<template>
  <n-flex
    v-if="authStore.isAuthenticated"
    justify="space-between"
    align="center"
    class="px-[40px] py-[20px] bg-[#F5F8FA] h-[65px] w-full text-[#02142E] leading-[30px] text-[22px]"
  >
    <n-text class="block text-[#02142E] font-[500] text-[22px]">
      {{
        currentPath === ""
          ? "Home"
          : currentPath === "404"
          ? "Page not found"
          : capitalizeFirstLetter(currentPath)
      }}
    </n-text>

    <n-space>
      <n-image :src="iconNotifi" width="18" class="hover:scale-105" />
      <n-dropdown trigger="hover" :options="options">
        <n-space align="center" size="small">
          <n-image
            width="32"
            height="32"
            class="rounded-[5px]"
            :src="userAvt"
          />
          <n-icon
            :component="ChevronDownOutline"
            size="16"
            class="cursor-pointer"
          />
        </n-space>
      </n-dropdown>
    </n-space>
  </n-flex>
</template>
