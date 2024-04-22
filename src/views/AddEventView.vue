<template>
  <div
    class="flex flex-col w-[480px] mx-auto gap-5 text-[#7F7F7F] select-none h-full pb-10"
  >
    <h1 class="my-5 text-5xl font-bold text-black">Create an Event</h1>
    <!--Select a category -->
    <div>
      <BaseSelect
        v-model="eventCategory"
        label="Select a category"
        id="eventSelect"
        :selectClass="customInputStyle"
        :labelClass="customLabelStyle"
      >
        <option
          v-for="(option, index) in categoryOptions"
          :key="index"
          :value="option"
        >
          {{ option }}
        </option>
      </BaseSelect>
    </div>

    <!-- Name & describe -->
    <div class="flex flex-col gap-3 space-y-2 text-lg">
      <h3 class="text-3xl font-[500] text-black">Name & describe your event</h3>
      <base-input
        v-model="eventTitle"
        type="text"
        :BaseInputClass="customInputStyle"
        :BaseLabelClass="customLabelStyle"
        label="Title"
        id="eventTitle"
        placeholder="Title"
      />
    </div>

    <!-- Location -->
    <div class="flex flex-col gap-3 space-y-2 text-lg">
      <h3 class="text-3xl font-[500] text-black">Where is your event?</h3>
      <base-input
        v-model="eventLocation"
        type="text"
        :BaseInputClass="customInputStyle"
        :BaseLabelClass="customLabelStyle"
        label="Location"
        id="eventLocation"
        placeholder="Location"
      />

      <base-input
        v-model="eventDescription"
        type="text"
        :BaseInputClass="customInputStyle"
        :BaseLabelClass="customLabelStyle"
        label="Description"
        id="eventDescription"
        placeholder="Description"
      />
    </div>

    <!-- choice_pet -->
    <div class="text-lg">
      <h3 class="text-3xl font-[500] text-black">Are pets allowed?</h3>
      <BaseRadioGroup id="petAllowedRadioGroup" groupClass="pt-5">
        <BaseRadio id="pet" name="petOption" value="1" v-model="isPetsAllowed">
          Yes
        </BaseRadio>
        <BaseRadio
          id="noPet"
          name="petOption"
          value="0"
          v-model="isPetsAllowed"
          radioLabel="ml-2"
        >
          No
        </BaseRadio>
      </BaseRadioGroup>
    </div>

    <!-- choice_pet_again -->
    <div class="text-lg" v-if="isPetsAllowed == 0">
      <h3 class="text-3xl font-[500] text-black">Are you sure?</h3>
      <div class="flex items-center gap-1 py-3">
        <BaseRadioGroup id="petAgainRadioGroup" groupClass="pt-5">
          <BaseRadio
            id="petAgain"
            name="petAgainOption"
            value="1"
            v-model="isPetAgain"
          >
            Yes
          </BaseRadio>
          <BaseRadio
            id="noPetAgain"
            name="petAgainOption"
            value="0"
            v-model="isPetAgain"
            radioLabel="ml-2"
          >
            No
          </BaseRadio>
        </BaseRadioGroup>
      </div>
    </div>

    <!-- extras -->
    <div class="text-lg">
      <h3 class="text-3xl font-[500] text-black">Extras</h3>
      <div class="flex flex-col gap-2 py-3">
        <BaseCheckbox v-model="isCateringChecked" id="cateringCheckbox">
          Catering
        </BaseCheckbox>
        <BaseCheckbox v-model="isLiveMusicChecked" id="liveMusicCheckbox">
          Live Music
        </BaseCheckbox>
      </div>
    </div>

    <!-- Submit button -->
    <button
      type="button"
      class="h-[50px] w-[135px] rounded-md bg-gradient-to-r from-teal-400 to-green-400 text-white text-lg font-500 cursor-pointer hover:scale-105 transition-all my-5"
    >
      Submit
    </button>
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

<script>
import BaseSelect from "../components/customInput/BaseSelect.vue";
import BaseInput from "../components/customInput/BaseInput.vue";
import BaseRadio from "../components/customInput/BaseRadio.vue";
import BaseRadioGroup from "../components/customInput/BaseRadioGroup.vue";
import BaseCheckbox from "../components/customInput/BaseCheckbox.vue";
import { ref } from "vue";

export default {
  components: {
    BaseSelect,
    BaseInput,
    BaseRadio,
    BaseRadioGroup,
    BaseCheckbox,
  },
  setup() {
    const eventTitle = ref("");
    const eventDescription = ref("");
    const eventLocation = ref("");
    const eventCategory = ref("");
    const isPetsAllowed = ref(1);
    const isPetAgain = ref(1);
    const isCateringChecked = ref(0);
    const isLiveMusicChecked = ref(0);
    const customInputStyle =
      "h-[50px] w-[450px] p-2 text-lg border rounded-sm outline-none";
    const customLabelStyle = "font-[500] cursor-pointer text-lg";

    const categoryOptions = [
      "Sustainability",
      "Nature",
      "Animal Welfare",
      "Housing",
      "Education",
      "Food",
      "Community",
    ];
    return {
      eventTitle,
      eventDescription,
      eventLocation,
      customInputStyle,
      customLabelStyle,
      eventCategory,
      isPetsAllowed,
      isPetAgain,
      categoryOptions,
      isCateringChecked,
      isLiveMusicChecked,
    };
  },
};
</script>
<style scoped></style>
