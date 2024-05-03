<script setup lang="ts">
import { ref } from "vue";

const eventTitle = ref<string>("");
const eventDescription = ref<string>("");
const eventLocation = ref<string>("");
const eventCategory = ref<string>("");
const isPetsAllowed = ref<number>(1);
const isPetAgain = ref<number>(0);
const isCateringChecked = ref<boolean>(false);
const isLiveMusicChecked = ref<boolean>(false);
const customInputStyle =
  "h-[50px] !w-[450px] max-w-[450px] p-2 text-lg  rounded-sm outline-none";

const categoryOptions: { label: string; value: string }[] = [
  { label: "Sustainability", value: "Sustainability" },
  { label: "Nature", value: "Nature" },
  { label: "Animal Welfare", value: "Animal Welfare" },
  { label: "Housing", value: "Housing" },
  { label: "Education", value: "Education" },
  { label: "Food", value: "Food" },
  { label: "Community", value: "Community" },
];
</script>

<template>
  <div
    class="flex flex-col w-[480px] mx-auto gap-5 text-[#7F7F7F] select-none h-fit p-10"
  >
    <n-h1 class="mt-5 text-5xl font-bold text-black"> Create an Event </n-h1>
    <!--Select a category -->
    <div>
      <n-text class="text-lg font-[400]"> Select a category </n-text>
      <BaseSelect
        v-model="eventCategory"
        :options="categoryOptions"
        base-class="w-[450px] mt-5 "
      />
    </div>

    <!-- Name & describe -->
    <div class="flex flex-col gap-3 space-y-2 text-lg">
      <n-h3 class="text-3xl font-[500] text-black">
        Name & describe your event
      </n-h3>
      <n-text class="customLabelStyle"> Title </n-text>
      <base-input
        v-model="eventTitle"
        type="text"
        bordered="true"
        :BaseInputClass="customInputStyle"
        placeholder="Title"
      />
    </div>

    <!-- Location -->
    <div class="flex flex-col gap-3 space-y-2 text-lg">
      <n-h3 class="text-3xl font-[500] text-black"> Where is your event? </n-h3>
      <n-text class="customLabelStyle"> Location </n-text>

      <base-input
        v-model="eventLocation"
        type="text"
        bordered="true"
        :BaseInputClass="customInputStyle"
        placeholder="Location"
      />

      <n-text class="customLabelStyle"> Description </n-text>

      <base-input
        v-model="eventDescription"
        type="text"
        bordered="true"
        :BaseInputClass="customInputStyle"
        placeholder="Description"
      />
    </div>

    <!-- choice_pet -->
    <div class="text-lg">
      <n-h3 class="text-3xl font-[500] text-black"> Are pets allowed? </n-h3>
      <BaseRadioGroup v-model:value="isPetsAllowed" name="petAllowedGroup">
        <BaseRadio value="1" label="Yes" />
        <BaseRadio value="0" label="No" />
      </BaseRadioGroup>
    </div>

    <!-- choice_pet_again -->
    <div v-if="isPetsAllowed == 0" class="text-lg">
      <n-h3 class="text-3xl font-[500] text-black"> Are you sure? </n-h3>
      <div class="flex items-center gap-1 py-3">
        <BaseRadioGroup v-model:value="isPetAgain" name="petAllowedGroupAgain">
          <BaseRadio value="1" label="Yes" />
          <BaseRadio value="0" label="No" />
        </BaseRadioGroup>
      </div>
    </div>

    <!-- extras -->
    <div class="text-lg">
      <h3 class="text-3xl font-[500] text-black">Extras</h3>
      <div class="flex flex-col gap-2 py-3">
        <BaseCheckbox id="cateringCheckbox" v-model:checked="isCateringChecked">
          Catering
        </BaseCheckbox>
        <BaseCheckbox
          id="liveMusicCheckbox"
          v-model:checked="isLiveMusicChecked"
        >
          Live Music
        </BaseCheckbox>
      </div>
    </div>

    <!-- Submit button -->
    <n-button class="baseButton"> Submit </n-button>
    <pre class="text-lg text-black">
{
  "category": "{{ eventCategory }}",
  "title": "{{ eventTitle }}",
  "description": "{{ eventDescription }}",
  "location": "{{ eventLocation }}",
  "pets": {{ isPetsAllowed }},
  "extras": {
    "catering": {{ isCateringChecked }},
    "music": {{ isLiveMusicChecked }}
  },
  "petsAgain": {{ isPetAgain }}
}
    </pre>
  </div>
</template>

<style>
.n-base-selection,
.n-base-selection--selected {
  padding: 4px !important;
}
</style>
