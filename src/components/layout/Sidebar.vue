<script setup>
import { ref, defineProps, h } from "vue";
import { NIcon } from "naive-ui";
import logo from "../../assets/images/Logo.png";
import { RouterLink } from "vue-router";
import { useAuthStore } from "@/stores/authStore.ts";

import {
  HomeOutline,
  CalendarOutline,
  StarOutline,
  InformationCircleOutline,
  ClipboardOutline,
  AddCircleOutline,
  CaretDownOutline,
  HandRightOutline,
  GridOutline,
  SettingsOutline,
  SettingsSharp,
} from "@vicons/ionicons5";

const authStore = useAuthStore();

const menuOptions = ref([
  { path: "/", label: "Home", key: "home", href: "/", icon: HomeOutline },
  {
    path: "/events",
    label: "Events",
    key: "events",
    href: "/events",
    icon: CalendarOutline,
  },
  {
    path: "/reviews",
    label: "Reviews",
    key: "reviews",
    href: "/reviews",
    icon: StarOutline,
  },
  {
    path: "/about",
    label: "About",
    key: "about",
    href: "/about",
    icon: InformationCircleOutline,
  },
  {
    path: "/todo",
    label: "Todo List",
    key: "todo",
    href: "/todo",
    icon: ClipboardOutline,
  },
  {
    path: "/event/add",
    label: "Add Event",
    key: "add-event",
    href: "/event/add",
    icon: AddCircleOutline,
  },
  {
    path: "/draggable",
    label: "Draggable",
    key: "draggable",
    href: "/draggable",
    icon: HandRightOutline,
  },
]);

const menuBotomOptions = ref([
  {
    path: "/",
    label: "Settings",
    key: "settings",
    href: "/",
    icon: SettingsSharp,
  },

  { path: "/", label: "Menu", key: "menu", href: "/", icon: GridOutline },
]);

const renderMenuLabel = (option) => {
  if ("href" in option) {
    return h(
      RouterLink,
      { to: option.href, class: "text-white" },
      h("span", { class: "text-white" }, option.label)
    );
  }
  return h("span", { class: "text-[#A2A7B4]" }, option.label);
};

const renderMenuIcon = (option) => {
  return h(NIcon, null, {
    default: () => h(option.icon, { class: "text-[#A2A7B4]" }),
  });
};
</script>

<template>
  <n-space
    v-if="authStore.isAuthenticated"
    vertical
    class="w-fit min-w-[90px] bg-[#192440] h-full sticky top-0 bottom-0 min-h-screen"
  >
    <n-layout has-sider class="bg-transparent py-[15px]">
      <n-layout-sider
        collapse-mode="width"
        class="bg-transparent h-fit"
        :collapsed-width="65"
        :width="240"
        :default-collapsed="true"
        trigger-class="text-[45px]"
        show-trigger="arrow-circle"
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <img :src="logo" class="h-[40px] w-[40px] mx-auto" alt="" />
        <n-flex justify="space-between" class="!h-full min-h-[665px]">
          <n-menu
            :collapsed-width="65"
            :collapsed-icon-size="20"
            :options="menuOptions"
            :render-label="renderMenuLabel"
            :render-icon="renderMenuIcon"
          />
          <n-menu
            class="mt-auto"
            :collapsed-width="65"
            :collapsed-icon-size="20"
            :options="menuBotomOptions"
            :render-label="renderMenuLabel"
            :render-icon="renderMenuIcon"
          />
        </n-flex>
      </n-layout-sider>
    </n-layout>
  </n-space>
</template>
