<script setup lang="ts">
// vue
import { computed } from 'vue';

// imports
import type { PlanSimpleSwitcherPropsType } from "../PlanMain.vue";

// props
const props = defineProps<{
  data: PlanSimpleSwitcherPropsType;
  modelValue?: string;
}>();

// emits
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

function updateGender(gender: string) {
  emit('update:modelValue', gender);
}
</script>

<template>
  <div class="simple-switcher">
    <div class="top-text" :style="{'--css-var-name': `var(--${props.data.topText})`}" v-if="props.data.topText"></div>
    <div class="switcher">
      <div class="runner" :style="{left: props.data.options[0] === props.modelValue ? '0' : '50%'}"></div>
      <button @click="updateGender('male')" :style="{ '--css-var-name': `var(--${props.data.options[0]})` }" :class="{active: props.data.options[0] === props.modelValue}"></button>
      <button @click="updateGender('female')" :style="{ '--css-var-name': `var(--${props.data.options[1]})` }" :class="{active: props.data.options[1] === props.modelValue}"></button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.simple-switcher {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  .top-text {
    font-size: 0.8rem;

    &::before {
      content: var(--css-var-name);
    }
  }

  .switcher {
    // padding: 0.1rem;
    background: var(--back-c);
    border: solid 0.0625rem var(--back-d);
    border-radius: 0.5rem;
    font-size: 0.8rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    position: relative;

    .runner {
      width: 50%;
      height: 100%;
      background: var(--back-d);
      border-radius: 0.5rem;
      position: absolute;
      transition: 0.25s;
    }

    button {
      padding: 0.5rem 1rem;
      color: var(--text-d);
      position: relative;
      z-index: 2;

      &::before {
        content: var(--css-var-name);
      }
    }

    .active {
      color: var(--text-a);
    }
  }
}
</style>
