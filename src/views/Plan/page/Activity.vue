<script setup lang="ts">
  // vue
import { inject, ref, computed } from "vue";
import type { Ref } from "vue";

// imports
import PlanHolder from "../wraps/PlanHolder.vue";

// inject
const userData = inject<Ref<{ activity: number }>>('userData');
const updateUserData = inject<(updates: any) => void>('updateUserData');

// локальные переменные для v-model
const localActivity = computed({
  get: () => userData?.value.activity || 1.2,
  set: (value: number) => {
    if (updateUserData) {
      updateUserData({ activity: value });
    } else if (userData) {
      userData.value.activity = value;
    }
  }
});

// vars
const options = ref([
  { name: "almost-none", val: 1 },
  { name: "sedentary", val: 1.2 },
  { name: "light", val: 1.375 },
  { name: "average", val: 1.55 },
  { name: "above-average", val: 1.725 },
  { name: "highest", val: 1.9 },
]);
</script>

<template>
  <PlanHolder>
    <h2></h2>
    <div class="form">
      <div :class="value.val === localActivity ? 'item active' : 'item'" v-for="value in options" @click="localActivity = value.val">
        <p :style="{'--css-var-name': `var(--${value.name})`}"></p>
      </div>
    </div>
  </PlanHolder>
</template>

<style scoped lang="scss">
h2 {
  &::after {
    content: var(--user-activity);
  }
}

.form {
  padding: 1rem;
  background: var(--back-b);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;

  .item {
    font-size: 0.8rem;
    padding: 0.25rem 0.5rem;
    aspect-ratio: 1 / 1;
    border: solid 0.125rem var(--back-c);
    border-radius: 0.5rem;
    display: flex;
    align-items: end;

    p {
      max-width: 50%;
      color: var(--text-c);

      &::before {
        content: var(--css-var-name);
      }
    }
  }

  .active {
    background: var(--back-c);
    border: solid 0.125rem var(--back-d);

    p {
      color: var(--text-a);
    }
  }
}
</style>
