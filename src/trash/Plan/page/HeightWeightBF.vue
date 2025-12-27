<script setup lang="ts">
// vue
import { inject, computed } from "vue";
import type { Ref } from "vue";

// imports
import PlanHolder from "../wraps/PlanHolder.vue";
import NumberInput from "../components/NumberInput.vue";

// types
import type { PlanUserData, PlanAgeHeightWeightType } from "../../../trash/PlanMain.vue";

// inject
const userData = inject<Ref<PlanAgeHeightWeightType>>('userData');
const updateUserData = inject<(updates: Partial<PlanUserData>) => void>('updateUserData');

// локальные переменные для v-model
const localHeight = computed({
  get: () => userData?.value.height,
  set: (value: number) => {
    if (updateUserData) {
      updateUserData({ height: value });
    } else if (userData) {
      userData.value.height = value;
    }
  }
});
const localWeight = computed({
  get: () => userData?.value.weight,
  set: (value: number) => {
    if (updateUserData) {
      updateUserData({ weight: value });
    } else if (userData) {
      userData.value.weight = value;
    }
  }
});
</script>

<template>
  <PlanHolder>
    <h2></h2>
    <div class="form">
      <NumberInput :data="{ topText: 'user-height', placeholder: '180' }" v-model="localHeight" />
      <NumberInput :data="{ topText: 'user-weight', placeholder: '72' }" v-model="localWeight" />
      <NumberInput :data="{ topText: 'user-goalbf', placeholder: '12' }" v-model="localWeight" />
    </div>
  </PlanHolder>
</template>

<style scoped lang="scss">
h2 {
  &::after {
    content: var(--body-info);
  }
}

.form {
  padding: 1rem;
  background: var(--back-b);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>