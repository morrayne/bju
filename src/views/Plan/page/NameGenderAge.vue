<script setup lang="ts">
// vue
import { inject, computed } from "vue";
import type { Ref } from "vue";

// imports
import PlanHolder from "../wraps/PlanHolder.vue";
import StringInput from "../components/StringInput.vue";
import NumberInput from "../components/NumberInput.vue";
import SimpleSwitcher from "../components/SimpleSwitcher.vue";

// types
import type { PlanUserData, PlanNameGenderType } from "../PlanMain.vue";

// inject
const userData = inject<Ref<PlanNameGenderType>>('userData');
const updateUserData = inject<(updates: Partial<PlanUserData>) => void>('updateUserData');

// Локальные переменные для v-model
const localName = computed({
  get: () => userData?.value.name,
  set: (value: string) => {
    if (updateUserData) {
      updateUserData({ name: value });
    } else if (userData) {
      userData.value.name = value;
    }
  }
});

const localGender = computed({
  get: () => userData?.value.gender || 'male',
  set: (value: string) => {
    if (updateUserData) {
      updateUserData({ gender: value });
    } else if (userData) {
      userData.value.gender = value;
    }
  }
});

const localAge = computed({
  get: () => userData?.value.age,
  set: (value: number | undefined) => {
    if (updateUserData) {
      updateUserData({ age: value });
    } else if (userData) {
      userData.value.age = value;
    }
  }
});
</script>

<template>
  <PlanHolder>
    <h2></h2>
    <div class="form">
      <StringInput :data="{ topText: 'user-name', placeholder: '88bridger' }" v-model="localName" />
      <SimpleSwitcher :data="{ topText: 'user-gender', options: ['male', 'female'] }" v-model="localGender" />
      <NumberInput :data="{ topText: 'user-age', placeholder: '21' }" v-model="localAge" />
    </div>
  </PlanHolder>
</template>

<style scoped lang="scss">
h2 {
  &::after {
    content: var(--basic-info);
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