<script setup>
import BaseInput from "@/components/customInput/BaseInput.vue";
import { array } from "yup";
const items = [
  {
    name: "timesheets_update",
    description: "updated timekeeping request #36",
    time: "16:43, 14/06/2022",
  },
  {
    name: "timesheets_update",
    description: "updated timekeeping request #36",
    time: "16:43, 14/06/2022",
  },
  {
    name: "timesheets_update",
    description: "updated timekeeping request #36",
    time: "16:43, 14/06/2022",
  },
  {
    name: "timesheets_update",
    description: "updated timekeeping request #36",
    time: "16:43, 14/06/2022",
  },
  {
    name: "timesheets_update",
    description: "updated timekeeping request #36",
    time: "16:43, 14/06/2022",
  },
];
defineProps({
  activity: {
    type: [array],
    default: false,
  },
});
</script>
<template>
  <div class="w-fit">
    <div class="flex gap-2 mb-5">
      <div
        class="flex text-[#5C6678] text-[14px] leading-[22px] items-center gap-2 py-2 pl-[17px] pr-[10px] w-[300px] rounded-sm border border-[#CDD2DB] h-[38px]"
      >
        <img
          src="@/assets/images/search.png"
          class="w-3 h-3 cursor-pointer"
          alt="search"
        >
        <base-input
          BaseInputClass="w-[250px]  p-0  outline-none text-[#CDD2DB]"
          :bordered="false"
          placeholder="Tìm kiếm tác vụ"
        />
      </div>
      <button
        class="w-[79px] h-[38px] flex justify-center items-center gap-2 leading-[22px] px-1 py-1/2 bg-[#E7EAF0] rounded-sm cursor-pointer"
      >
        <img
          src="@/assets/images/filter.png"
          class="text-[#5C6678] h-[8.8px] w-[14.4px]"
          alt="filter"
        >
        Lọc
      </button>
    </div>
    <div class="py-5">
      <table
        v-if="activity.length > 0"
        class="w-full"
      >
        <thead class="w-full">
          <tr class="flex items-center w-full justify-evenly">
            <th class="w-[2%]" />
            <th class="w-[18%] text-thead">
              Mode
            </th>
            <th class="w-[30%] text-thead text-start">
              Loại
            </th>
            <th class="w-[35%] text-thead text-start">
              Tác vụ
            </th>
            <th class="w-[15%] text-thead text-start">
              Thời gian
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in items"
            :key="index"
            class="flex justify-start w-full border-y py-3 border-[#e7eaf0]"
          >
            <th class="w-[2%] text-tbody text-start">
              #{{ index + 1 }}
            </th>
            <th class="w-[18%] text-tbody">
              <img
                src="@/assets/images/mode.png"
                alt="mode"
                class="h-[16.8px] w-[15.6px] mx-auto"
              >
            </th>
            <th class="w-[30%] text-tbody text-start">
              {{ item.name }}
            </th>
            <th class="w-[35%] text-tbody text-start">
              {{ item.description }}
            </th>
            <th class="w-[15%] text-start text-tbody">
              {{ item.time }}
            </th>
          </tr>
        </tbody>
      </table>
      <p
        v-if="activity.length == 0"
        class="text-[18px] leading-[24px] text-center"
      >
        Không có hoạt động nào
      </p>
    </div>
  </div>
</template>
<style scoped>
.text-thead {
  color: #02142e;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  line-height: 22px;
}
.text-tbody {
  color: #39455b;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}
</style>
